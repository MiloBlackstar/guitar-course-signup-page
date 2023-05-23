

export default function FormSection() {
  return (
    <main>
      <section>
        <h2>Let's do it together!</h2>
        <p>Register now!</p>
      </section>

      <section>
        <p className="description">Our teachers will get you through the basics in 1 on 1 or group lessons. You will learn many guitar techniques and spend greate time. First group lesson is free! <strong>What are you waiting for?</strong></p>
      </section>

      <section>
        <form>
          <input type="text" required placeholder="First Name"/>
          <input type="text" required placeholder="Last Name"/>
          <input type="text" required placeholder="Email"/>

          <button>Register now</button>
        </form>

        <p className="close-note">We do not share your personal information without your permission!</p>
      </section>
    </main>
  )
}