import React from 'react'
import script from 'next/script'
const page = () => {
  return (
    <div>
      This is the messages page
    <script>
      {`alert("Welcome to message page");`}
    </script>
    </div>
  )
}

export default page

export const metadata = {
  title: "Messages - Facebook Clone",
  description: "This is a Facebook clone built with Next.js and Tailwind CSS.",
};