import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import ForthComponent from './ForthComponent'
import {FifthComponent} from './FirstComponent'
import LearningJavaScript from './LearningJavaScript'

export default function LearningComponent() {
  return (
    <div className="LearningComponent">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent />
      <ForthComponent/>
      <FifthComponent />
      <LearningJavaScript />
      </div>
  );
}
