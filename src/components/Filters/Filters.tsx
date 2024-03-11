import { FormLayoutGroup } from "@vkontakte/vkui"
import { memo } from "react"
import { FilterByPrivacy } from "./FilterByPrivacy/FilterByPrivacy";
import { FilterByAvatarColor } from "./FilterByAvatarColor/FilterByAvatarColor";
import { FilterByFriends } from "./FilterByFriends/FilterByFriends";
import { IGroup } from "../../types";
import './Filters.css'

interface FiltersProps {
    selectType?: string;
    onSelectType: (value: string) => void;
    onSelectTypeColor: (value: string) => void;
    onSelectTypeFriend: (value: string) => void;
    groups: IGroup[]
}

export const Filters = memo((props: FiltersProps) => {
    const {selectType, onSelectType, onSelectTypeColor, onSelectTypeFriend, groups} = props
    
    return (
        <FormLayoutGroup mode="horizontal" className="filters">
            <FilterByPrivacy onSelectPrivacyType={onSelectType} selectPrivacyType={selectType} />
            <FilterByAvatarColor onSelectAvatarColorType={onSelectTypeColor} selectAvatarColorType={selectType} />
            <FilterByFriends groups={groups} onSelectFriendsType={onSelectTypeFriend} selectFriendsType={selectType} />
        </FormLayoutGroup>
    )
})
