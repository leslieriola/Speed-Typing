export const app = document.querySelector('#app').innerHTML = `
  <div class="container-fluid box">
    <div class="top">
        <h1 id="heading" class = "yellow">Typing Speed Test</h1>
        <div class="limits-box">
          <div class="limit">
            <a id="thirty" class="yellow"  href="#" >30s</a>
            <a id="sixty"  href="#" >60s</a>
          </div>
          <div class="limit">
            <a id="beg" class="yellow"  href="#" >beginner</a>
            <a id="pro"  href="#" >pro</a>
          </div>
        </div>
    </div>

    <div class="stats center">
      <div class="stat-block if">
        <div id="timeName" class = "stat-name yellow if">Time</div>
        <div id="time" class="details if ">30</div>
      </div>

      <div class="stat-block if">
        <div id="cwName" class = "stat-name yellow if">CW</div>
        <div id="cw" class="details if">0</div>
      </div>
    </div>


    <div class="text-display" id="textDisplay">

    </div>

    <div class="input-area center">
      <textarea rows="1" class="text-input" id="textInput" autofocus autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
    </div>

    <div  class="restart-button center">
      <a id="restartBtn" class = "current" href="#">
        <i class="fas fa-redo"></i>
      </a>
    </div>

    <footer class="center">
      &copy2023 <a class="grey" href="https://leslieriola.github.io/" target="blank">Leslie Riola</a> & <a class="grey" href="https://github.com/Aczeal14" target="blank">Aczeal</a>
    </footer>
  </div>
`