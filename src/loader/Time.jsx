import moment from 'moment'
import React from 'react'


export default function Time({time}) {
    const videoTime = moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
  return (
  <>
<div>
    <span className='absolute bottom-2 right-2 bg-gray-900 text-white px-2 py-1 text-xs rounded-md'>
        {videoTime}
    </span>
</div>
  </>
  )
}
