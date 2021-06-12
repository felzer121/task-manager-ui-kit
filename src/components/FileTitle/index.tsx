import React from 'react'
import './style.scss'

const FilesTitle = () => {
  return (
    <div className='FilesPageTitle'>
      <ul className='FilesPageTitle__ul'>
        <li className='FilesPageTitle__span'>Image</li>
        <li className='FilesPageTitle__span'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            className='FilesPageTitle__svg'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              opacity='0.5'
              d='M15.6084 13.7175L12.1325 10.2417C12.114 10.2232 12.0924 10.2103 12.0731 10.1931C12.757 9.15561 13.1562 7.91371 13.1562 6.57816C13.1562 2.94512 10.2111 0 6.57809 0C2.94512 0 0 2.94512 0 6.57809C0 10.211 2.94506 13.1562 6.57803 13.1562C7.91364 13.1562 9.15549 12.757 10.193 12.0731C10.2102 12.0923 10.223 12.114 10.2415 12.1324L13.7175 15.6084C14.2396 16.1305 15.0862 16.1305 15.6084 15.6084C16.1305 15.0863 16.1305 14.2397 15.6084 13.7175ZM6.57809 10.8758C4.20448 10.8758 2.28035 8.95164 2.28035 6.57809C2.28035 4.20448 4.20455 2.28035 6.57809 2.28035C8.95158 2.28035 10.8758 4.20455 10.8758 6.57809C10.8758 8.95164 8.95158 10.8758 6.57809 10.8758Z'
              fill='#131313'
            />
          </svg>
          Name
        </li>
        <li className='FilesPageTitle__span'>Size</li>
        <li className='FilesPageTitle__span'>Uploaded By</li>
        <li className='FilesPageTitle__span'>Tag</li>
        <li className='FilesPageTitle__span'>Date</li>
      </ul>
    </div>
  )
}

export { FilesTitle }
