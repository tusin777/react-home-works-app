import { UserGreeting } from "../UserGreeting/UserGreeting.jsx";
import UserGreetingDefault from "../UserGreeting/UserGreetingDefault.jsx";
// именованный экспорт
import { UserGreeting3 } from "../UserGreeting/UserGreetingMixed.jsx";

// экспорт по умолчанию
import UserGreeting3Default from "../UserGreeting/UserGreetingMixed.jsx";

import { ElementExample } from "../ElementExample/ElementExample.jsx";
import ProductTitle from "../ProductTitle/ProductTitle.jsx";
import { SiteInfo, UserInfo } from "../InfoBlock/InfoBlock.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1>React Lesson Template</h1>
      <p>Этот шаблон предназначен для использования в любом уроке.</p>
      <UserGreeting />
      <UserGreeting />
      <UserGreeting />
      <UserGreetingDefault />
      <UserGreeting3 />
      <UserGreeting3Default />
      <ElementExample />
      <ProductTitle />
      <ProductTitle />
      <ProductTitle />
      <SiteInfo />
      <UserInfo />
    </div>
  );
}
