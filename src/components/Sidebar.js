import React from 'react'
import { SidebarContainer, SidebarHeader, SidebarInfo } from './Sidebar-styled'
import SidebarOption from './SidebarOption'
import CreateIcon from '@material-ui/icons/Create'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { useCollection } from 'react-firebase-hooks/firestore'
import { auth, db } from '../firebase'

import {
  ExpandMore,
  ExpandLess,
  FileCopy,
  Apps,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Add,
} from '@material-ui/icons'
import { useAuthState } from 'react-firebase-hooks/auth'

function Sidebar() {
  const [value, loading, error] = useCollection(db.collection('rooms'), {
    snapshotListenOptions: { includeMetadataChanges: true },
  })
  const [user] = useAuthState(auth)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack Channel</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title='Threads' />
      <SidebarOption Icon={Inbox} title='Mentions & reactions' />
      <SidebarOption Icon={Drafts} title='Saved items' />
      <SidebarOption Icon={BookmarkBorder} title='Channel browser' />
      <SidebarOption Icon={PeopleAlt} title='People & user groups' />
      <SidebarOption Icon={Apps} title='Apps' />
      <SidebarOption Icon={FileCopy} title='File browser' />
      <SidebarOption Icon={ExpandLess} title='Show less' />
      <hr />
      <SidebarOption Icon={ExpandMore} title='Channels' />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title='Add Channel' />
      {error && <strong>Error: {JSON.stringify(error)}</strong>}
      {loading && <span>Collection: Loading...</span>}
      {value && (
        <span>
          {value.docs.map((doc) => (
            <SidebarOption
              key={doc.id}
              id={doc.id}
              title={doc.data().name}></SidebarOption>
          ))}
        </span>
      )}
    </SidebarContainer>
  )
}

export default Sidebar
