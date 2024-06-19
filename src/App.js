import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-toastify/dist/ReactToastify.css';
import MainHome from "./components/MainHome";
import About from "./pages/About";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import CertificateVerifier from "./pages/CertificateVerifier";
import WebDevelopmentTask from "./pages/WebDevelopmentTask";
import DataScienceTask from "./pages/DataScienceTask";
import PythonTask from "./pages/PythonTask";
import JavaDevelopmentTask from "./pages/JavaDevelopmentTask";
import AppDevelopmentTask from "./pages/AppDevelopmentTask";
import UiDesignTask from "./pages/UiDesignTask";
import CppTask from "./pages/CppTask";
import MachineLearningTask from "./pages/MachineLearningTask";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainHome />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/service" exact element={<Service />} />
        <Route path="/contact" exact element={<ContactUs />} />
        <Route path="/verify" exact element={<CertificateVerifier />} />

        <Route path="/tasks" exact element={<Tasks />} />

        <Route
          path="/tasks/web-development"
          exact
          element={<WebDevelopmentTask />}
        />
        <Route path="/tasks/data-science" exact element={<DataScienceTask />} />
        <Route
          path="/tasks/python-development"
          exact
          element={<PythonTask />}
        />
        <Route
          path="/tasks/java-development"
          exact
          element={<JavaDevelopmentTask />}
        />
        <Route
          path="/tasks/app-development"
          exact
          element={<AppDevelopmentTask />}
        />
        <Route path="/tasks/ui-design" exact element={<UiDesignTask />} />
        <Route path="/tasks/cpp-development" exact element={<CppTask />} />
        <Route
          path="/tasks/machine-learning"
          exact
          element={<MachineLearningTask />}
        />

        <Route
          path="/task/web-development"
          exact
          element={<WebDevelopmentTask />}
        />
        <Route path="/task/data-science" exact element={<DataScienceTask />} />
        <Route path="/task/python-development" exact element={<PythonTask />} />
        <Route
          path="/task/java-development"
          exact
          element={<JavaDevelopmentTask />}
        />
        <Route
          path="/task/app-development"
          exact
          element={<AppDevelopmentTask />}
        />
        <Route path="/task/ui-design" exact element={<UiDesignTask />} />
        <Route path="/task/cpp-development" exact element={<CppTask />} />
        <Route
          path="/task/machine-learning"
          exact
          element={<MachineLearningTask />}
        />

        <Route
          path="/term-and-condition"
          exact
          element={<TermsAndConditionsPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
