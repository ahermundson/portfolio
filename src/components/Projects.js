import '../stylesheets/main.scss'
import Arrow from 'react-icons/lib/fa/caret-right'

export const Projects = () => (
  <div id="project-container">
    <h2>Projects</h2>
    <div id="a-book-a-week">
      <div className="project-image">
        <img src="/assets/a-book-a-week.png" />
      </div>
      <div className="project-info">
        <h3>A Book A Week</h3>
        <ul>
          <li><Arrow /> A Book A Week is an app that allows you to easily track your progress towards reading a book a week for a year.</li>
          <li><Arrow /> A Book A Week helps you stay on track to read a book a week for a year by sending you daily emails and giving you specifics on how many pages you need to read per day to stay on track to meet your goal. </li>
          <li><Arrow /> Technologies Used: AngularJS, MongoDB, Mongoose, Nodemailer, Google Books API, Node.js, express and Firebase Authentication.</li>
        </ul>
      </div>
    </div>
    <div id="american-drapery-systems">
      <div className="ads-project-info">
        <h3>American Drapery Systems - Measurement Tool</h3>
        <ul>
          <li><Arrow /> ADS came to Prime Digital Academy looking for help by way of a measurement input tool.</li>
          <li><Arrow /> Our group project allows ADS to easily input measurements at survey sites and formats the measurements to be exported to PDF. It also allows ADS to upload images to be sent to contract installers.</li>
          <li><Arrow /> Technologies Used: AngularJS, Angular Material, PostgresQL, Node.js, express, Amazon Web Services and Firebase Authentication</li>
        </ul>
      </div>
      <div className="ads-project-image">
        <img src="/assets/a-book-a-week.png" />
      </div>
    </div>
  </div>
)
