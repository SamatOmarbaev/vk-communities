import { CustomSelect, FormItem } from "@vkontakte/vkui"
import { memo } from "react"
import { IGroup, User } from "../../../types";
import { groupsData } from "../../../mockData";

interface FilterByFriendsProps {
    selectFriendsType?: string;
    onSelectFriendsType: (value: string) => void;
}

export const FilterByFriends = memo((props: FilterByFriendsProps) => {
    const {selectFriendsType, onSelectFriendsType} = props;
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onSelectFriendsType(selectedValue);
    };

    const getFriendsListFromGroups = (groups: IGroup[]): User[] => {
        let friendsList: User[] = [];
        groups.forEach(group => {
          if (group.friends) {
            friendsList = [...friendsList, ...group.friends];
          }
        });
        return friendsList;
    };
      
    const friends = getFriendsListFromGroups(groupsData.data || []);

    const optionsWithKeys = friends.map((friend, index) => ({
        label: `${friend.first_name} ${friend.last_name}`,
        value: friend.last_name,
        key: friend.last_name || friend.first_name ? index + 'asda' : index
    }));

    return (
        <FormItem
                top="По наличию друзей в группе"
                htmlFor="custom-search-algo-select-id"
                style={{ flexBasis: '200px', flexGrow: 0 }}
            >
            <CustomSelect
                id="select-type-select-id"
                value={selectFriendsType}
                placeholder="Выберите друга"
                options={optionsWithKeys}
                onChange={handleSelectChange}
            />
        </FormItem>
    )
})
