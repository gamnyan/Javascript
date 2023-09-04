// import { useState } from "react";

// export const FeedbackForm = () => {
//    //    let firstName = "";
//    const [isSent, setIsSent] = useState(false);
//    if (isSent) {
//       return <h1>Thank you!</h1>;
//    } else {
//       const [message, setMessage] = useState('');
//       return (
//          <form
//             onSubmit={e => {
//                e.preventDefault();
//                alert(`Sending: "${message}"`);
//                setIsSent(true);
//             }}>
//             <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
//             <br />
//             <button type="submit">Send</button>
//          </form>
//       );
//    }
// };

// FeedbackForm.displayName = FeedbackForm;
