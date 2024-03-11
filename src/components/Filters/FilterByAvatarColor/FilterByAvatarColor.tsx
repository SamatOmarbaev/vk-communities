import { CustomSelect, FormItem } from "@vkontakte/vkui"
import { memo, useCallback } from "react"
import { avatarColor } from "../../../utility/utility"

interface FilterByAvatarColorProps {
    selectAvatarColorType?: string;
    onSelectAvatarColorType: (value: string) => void;
}

export const FilterByAvatarColor = memo((props: FilterByAvatarColorProps) => {
    const {selectAvatarColorType, onSelectAvatarColorType} = props;
    
    const handleSelectChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onSelectAvatarColorType(selectedValue);
    }, [onSelectAvatarColorType]);

    return (
        <FormItem
                top="По цвету аватарки"
                htmlFor="custom-search-algo-select-id"
            >
            <CustomSelect
                id="select-type-select-id"
                value={selectAvatarColorType}
                placeholder="Выберите цвет аватарки"
                options={avatarColor}
                onChange={handleSelectChange}
            />
        </FormItem>
    )
})
