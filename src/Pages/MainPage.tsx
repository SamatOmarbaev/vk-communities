import { Panel, View } from "@vkontakte/vkui"
import { CardList } from "../components/CardList/CardList"
import { Filters } from "../components/Filters/Filters"


export const MainPage = () => {
    return (
        <View activePanel="main">
            <Panel id="main">
                <Filters />
                <CardList />
            </Panel>
        </View>
    )
}
