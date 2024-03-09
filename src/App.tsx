import { AppRoot, Panel, PanelHeader, View } from '@vkontakte/vkui';
import { CardList } from './components/CardList/CardList';

function App() {
  return (
    <AppRoot mode="full">
      <PanelHeader delimiter="none" shadow>
        Профильное задание - Frontend-разработчик в команду сообществ
      </PanelHeader>
      <View activePanel="main">
        <Panel id="main">
          <CardList />
        </Panel>
      </View>
    </AppRoot>
  );
}

export default App
