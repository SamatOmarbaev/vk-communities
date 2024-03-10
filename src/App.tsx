import { AppRoot, PanelHeader } from '@vkontakte/vkui';
import { MainPage } from './Pages/MainPage';

function App() {
  return (
    <AppRoot mode="full">
      <PanelHeader delimiter="none" shadow>
        Профильное задание - Frontend-разработчик в команду сообществ
      </PanelHeader>
      <MainPage />
    </AppRoot>
  );
}

export default App
