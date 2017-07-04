import React from 'react'

const StepItem = (props) => {
  const {title, content, url} = props
  return (
    <div class='tile box'>
      <div class='columns is-mobile'>
        <div class='column is-6 step-image'>
          <figure class='image is-128x128'>
            <img src={url} />
          </figure>
        </div>
        <div class='column step-content'>
          <p class='title'>{title}</p>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
// const StepItem = (props) => {
//   const {title, content, url} = props
//   return (
//     <div class='tile is-child box'>
//       <div class='tile is-parent'>
//         <article class='tile is-child '>
//           <p class='title'>{title}</p>
//           <p>{content}</p>
//           <figure class='image is-square'>
//             <img src={url} />
//           </figure>
//         </article>
//       </div>
//     </div>
//   )
// }

export default StepItem
