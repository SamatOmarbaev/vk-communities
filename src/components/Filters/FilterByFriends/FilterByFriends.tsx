import { CustomSelect, FormItem } from "@vkontakte/vkui"
import { memo, useCallback } from "react"
import { IGroup, User } from "../../../types";

interface FilterByFriendsProps {
    selectFriendsType?: string;
    onSelectFriendsType: (value: string) => void;
    groups: IGroup[]
}

export const FilterByFriends = memo((props: FilterByFriendsProps) => {
    const {selectFriendsType, onSelectFriendsType, groups} = props;
    
    const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onSelectFriendsType(selectedValue);
    }, [onSelectFriendsType]);

    const getFriendsListFromGroups = (groups: IGroup[]): User[] => {
        let friendsList: User[] = [];
        groups.forEach(group => {
          if (group.friends) {
            friendsList = [...friendsList, ...group.friends];
          }
        });
        return friendsList;
    };
      
    const friends = getFriendsListFromGroups(groups);

    return (
        <FormItem
                top="По наличию друзей в группе"
                htmlFor="custom-search-algo-select-id"
            >
            <CustomSelect
                id="select-type-select-id"
                value={selectFriendsType}
                placeholder="Выберите друга"
                options={friends.map((friend, index) => (
                    {
                        label: `${friend.first_name} ${friend.last_name}`,
                        value: `${friend.last_name}`,
                        KeyboardEvent: index
                    }
                ))}
                onChange={handleSelectChange}
            />
        </FormItem>
    )
})
