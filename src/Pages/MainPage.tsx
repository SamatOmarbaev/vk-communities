import { Panel, View } from "@vkontakte/vkui"
import { CardList } from "../components/CardList/CardList"
import { Filters } from "../components/Filters/Filters"
import { useCallback, useEffect, useState } from "react";
import { IGroup } from "../types";
import { groupsData } from "../mockData";

export const MainPage = () => {
    const [groups, setGroups] = useState<IGroup[]>([]);
    const [filteredGroups, setFilteredGroups] = useState(groups);

    const filterByClosed = useCallback((closedValue: string) => {
        if (closedValue === "") {
            setFilteredGroups(groups);
        } else {
          const filtered = groups.filter(group => {
            return group.closed.toString() === closedValue
          });
          setFilteredGroups(filtered);
        }
    }, [groups]);

    const filterByColors = useCallback((closedValue: string) => {
        if (closedValue === "") {
            setFilteredGroups(groups);
        } else {
          const filtered = groups.filter(group => {
            return group.avatar_color === closedValue
          });
          setFilteredGroups(filtered);
        }
    }, [groups]);

    const filterByFriends = useCallback((selectedFriend: string) => {
        if (selectedFriend === '') {
            setFilteredGroups(groups)
        }
        if (groupsData.data) {
            const filteredData = groupsData.data.filter(group => group.friends !== undefined &&
                group.friends.some(friend => friend.last_name === selectedFriend));
            setFilteredGroups(filteredData);
        }
    }, [groups]);

    useEffect(() => {
        setFilteredGroups(groups);
    }, [groups]);

    return (
        <View activePanel="main">
            <Panel id="main">
                <Filters 
                    onSelectType={filterByClosed}
                    onSelectTypeColor={filterByColors} 
                    onSelectTypeFriend={filterByFriends}
                />
                <CardList 
                    groups={filteredGroups}
                    setGroups={setGroups}
                />
            </Panel>
        </View>
    )
}
