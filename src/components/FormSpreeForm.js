import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function FormSpreeForm() {
  const [state, handleSubmit] = useForm("mzbyklev");
  if (state.succeeded) {
      return <p>Thanks for your comment!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          placeholder="Your comment..."
          id="message"
          name="message"
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="Your email address..."
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormSpreeForm;