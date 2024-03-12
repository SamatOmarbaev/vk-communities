import { CustomSelect, FormItem } from "@vkontakte/vkui"
import { memo } from "react"
import { selectTypes } from "../../../utility/utility"

interface FilterByPrivacyProps {
    selectPrivacyType?: string;
    onSelectPrivacyType: (value: string) => void;
}

export const FilterByPrivacy = memo((props: FilterByPrivacyProps) => {
    const {selectPrivacyType, onSelectPrivacyType} = props;
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        onSelectPrivacyType(selectedValue);
    };

    return (
        <FormItem
            top="По типу приватности"
            htmlFor="select-type-select-id"
            style={{ flexBasis: '200px', flexGrow: 0 }}
        >
            <CustomSelect
                id="select-type-select-id"
                value={selectPrivacyType}
                placeholder="Все"
                options={selectTypes}
                onChange={handleSelectChange}
            />
        </FormItem>
    )
})
