import React from 'react'
import GitHubCalendar from "react-github-calendar";
const Github = () => {
  return (
    <>
        <div >
        <GitHubCalendar
        username="nitinkumar2003"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
        </div>
    </>
  )
}

export default Github