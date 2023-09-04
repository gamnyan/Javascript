export const SignUp = () => (
   <>
      <form onSubmit={() => alert("submitting")}>
         <select onChange={e => alert(e.target.value)}>
            <option value="1호선">1호선</option>
            <option value="2호선">2호선</option>
            <option value="3호선">3호선</option>
            <option value="4호선">4호선</option>
         </select>
         <button
            onClick={e => {
               e.preventDefault();
               alert("Send IN");
            }}>
            Send In
         </button>
      </form>
      <button onClick={() => alert("Send OUT")}>Send Out</button>
   </>
);
SignUp.displayName = SignUp;
