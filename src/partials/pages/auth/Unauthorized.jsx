import React from 'react'

const Unauthorized = () => {
  return (
    <figure className="diff aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      Hello, You are 👉
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className=" bg-error grid place-content-center text-9xl font-black">Unauthorized ⛔</div>
  </div>
  <div className="diff-resizer"></div>
</figure>
  )
}

export default Unauthorized