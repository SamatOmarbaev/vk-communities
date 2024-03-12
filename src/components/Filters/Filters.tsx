import { FormLayoutGroup } from "@vkontakte/vkui"
import { FilterByPrivacy } from "./FilterByPrivacy/FilterByPrivacy";
import { FilterByAvatarColor } from "./FilterByAvatarColor/FilterByAvatarColor";
import { FilterByFriends } from "./FilterByFriends/FilterByFriends";
import './Filters.css'

interface FiltersProps {
    selectType?: string;
    onSelectType: (value: string) => void;
    onSelectTypeColor: (value: string) => void;
    onSelectTypeFriend: (value: string) => void;
}

export const Filters = (props: FiltersProps) => {
    const {selectType, onSelectType, onSelectTypeColor, onSelectTypeFriend} = props
    
    return (
        <FormLayoutGroup mode="horizontal" className="filters">
            <FilterByPrivacy onSelectPrivacyType={onSelectType} selectPrivacyType={selectType} />
            <FilterByAvatarColor onSelectAvatarColorType={onSelectTypeColor} selectAvatarColorType={selectType} />
            <FilterByFriends onSelectFriendsType={onSelectTypeFriend} selectFriendsType={selectType} />
        </FormLayoutGroup>
    )
}
