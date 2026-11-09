import './LandingPage.css'

export default function LandingPage() {
  return <>
    <header className="landing-introduction microbit-landing">
      <p className="unit-level">Third Level Computing Science</p>
      <h1>Micro:bit programming</h1>
      <p>Learn how to control a BBC micro:bit using MakeCode Blocks. Across ten lessons, you will use buttons, sensors and the LED display to explore events, sequence, variables, selection and iteration, then combine functions, lists and radio messages in your own programs.</p>
      <p>Each lesson explains the ideas with diagrams and worked examples. Use the lessons alongside the practical tasks in your workbook.</p>
      <a className="button primary" href="#/lessons">Go to lessons <span aria-hidden="true">&rarr;</span></a>
    </header>
    <div className="curriculum">
      <section aria-labelledby="outcomes-heading">
        <h2 id="outcomes-heading">Experiences and outcomes</h2>
        <dl className="curriculum-outcomes">
          <div><dt>TCH 3-15a</dt><dd>Select development tools and use requirements to design, build, evaluate and improve computing solutions.</dd></div>
          <div><dt>TCH 3-14a</dt><dd>Understand how programming language constructs represent structured information.</dd></div>
        </dl>
      </section>
      <section aria-labelledby="benchmarks-heading">
        <h2 id="benchmarks-heading">Benchmarks supported by this unit</h2>
        <ul className="curriculum-benchmarks">
          <li>Explain code that uses variables and data structures.</li>
          <li>Combine programming constructs and multiple variables in a visual program.</li>
          <li>Store and work with structured information, including lists.</li>
          <li>Identify the processes and information needed to solve a physical computing problem.</li>
          <li>Find and repair mistakes in program logic.</li>
          <li>Organise related instructions into named subprograms.</li>
          <li>Build visual programs that respond to real-world inputs.</li>
        </ul>
        <p className="curriculum-scope">The unit develops these skills through button and sensor programs, a memory-game list, reusable functions, and a classroom help system. Pupils demonstrate their learning through working programs, explanations and recorded tests.</p>
      </section>
    </div>
  </>
}
