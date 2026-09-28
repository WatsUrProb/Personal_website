export default function ProjectsSection() {
  return (
    <section className="serviceTest">
      <div className="services test" id="services">
        <h1 className="sub-title test">My past <span className="test">Projects</span></h1>
        <div className="project-list test">
          <div className="test">
            <i className="bx bx-checkbox-checked" style={{ color: "cornflowerblue" }} aria-hidden="true" />
            <h2>Palindrome Checker</h2>
            <p>This project leverages HTML to structure a clear input field and result display area, making it intuitive for users. CSS is applied to style the input, button, and output elements, ensuring the interface is clean and responsive. JavaScript underpins the core functionality by reversing input strings and comparing them to detect palindromes.</p>
            <a href="https://watsurprob.github.io/Palindrome.github.io/" className="read" target="_blank" rel="noopener noreferrer">Try it!</a>
          </div>
          <div className="test">
            <i className="bx bx-cube-alt" style={{ color: "cornflowerblue" }} aria-hidden="true" />
            <h2>Roman Number Convertor</h2>
            <p>This tool uses HTML to build a user-friendly interface with distinct input and result sections. CSS provides consistent styling and layout, emphasizing readability and usability with a simple, modern design. JavaScript handles the conversion logic between integers and Roman numerals, efficiently mapping and processing values.</p>
            <a href="https://watsurprob.github.io/RomanNumeral.github.io/" className="read" target="_blank" rel="noopener noreferrer">Try it!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
