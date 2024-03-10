import { Avatar, Chip, ChipsSelect, CustomSelect, CustomSelectOption, FormItem, FormLayoutGroup } from "@vkontakte/vkui"
import { memo, useMemo, useState } from "react"
import './Filters.css'
import { Icon12Download } from "@vkontakte/icons";

export const Filters = memo(() => {
    const groups = useMemo(
        () => [
          { value: 'download', label: 'Скачать все и вся!', icon: <Icon12Download /> },
          {
            value: '1',
            label: 'Arctic Monkeys',
          },
          { value: '2', label: 'Звери', disabled: true,  },
          { value: '4', label: 'FACE',  },
          {
            value: '3',
            label: 'Depeche Mode',
          },
          { value: '5', label: 'Linkin Park',  },
        ],
        [],
    );
    const selectTypes = [
        {
          label: 'default',
          value: 'default',
        },
        {
          label: 'plain',
          value: 'plain',
        },
        {
          label: 'accent',
          value: 'accent',
        },
    ];
    
    const [selectType, setSelectType] = useState<string>('');

    return (
        <FormLayoutGroup mode="horizontal" className="filters">
            <FormItem
                top="По типу приватности"
                htmlFor="select-type-select-id"
                style={{ flexBasis: '200px', flexGrow: 0 }}
            >
                <CustomSelect
                    id="select-type-select-id"
                    value={selectType}
                    placeholder="Не задан"
                    options={selectTypes}
                    onChange={(e) => setSelectType(e.target.value)}
                    renderOption={({ option, ...restProps }) => (
                        <CustomSelectOption {...restProps} description={`"${option.value}"`} />
                    )}
                />
            </FormItem>
            <FormItem htmlFor="groups" top="По цвету аватарки">
                <ChipsSelect
                    id="groups"
                    options={groups}
                    placeholder="Не выбраны"
                    emptyText="Совсем ничего не найдено"
                    selectedBehavior="hide"
                    closeAfterSelect={false}
                    onChangeStart={(event, option) => {
                    if (option.value === 'download') {
                        event.preventDefault();
                        alert('download!');
                    }
                    }}
                    renderChip={({ value, label, ...rest }, { src }) => (
                        <Chip value={value} before={<Avatar size={20} src={src} aria-hidden />} {...rest}>
                            {label}
                        </Chip>
                    )}
                    renderOption={(props, { icon }) => {
                        return (
                            <CustomSelectOption
                            before={
                                <Avatar size={20} aria-hidden>
                                    {icon}
                                </Avatar>
                            }
                            {...props}
                            />
                        );
                    }}
                />
            </FormItem>
            <FormItem htmlFor="groups" top="По наличию друзей в группе">
                <ChipsSelect
                    id="groups"
                    options={groups}
                    placeholder="Не выбраны"
                    emptyText="Совсем ничего не найдено"
                    selectedBehavior="hide"
                    closeAfterSelect={false}
                    onChangeStart={(event, option) => {
                    if (option.value === 'download') {
                        event.preventDefault();
                        alert('download!');
                    }
                    }}
                    renderChip={({ value, label, ...rest }, { src }) => (
                        <Chip value={value} before={<Avatar size={20} src={src} aria-hidden />} {...rest}>
                            {label}
                        </Chip>
                    )}
                    renderOption={(props, { icon }) => {
                        return (
                            <CustomSelectOption
                            before={
                                <Avatar size={20} aria-hidden>
                                    {icon}
                                </Avatar>
                            }
                            {...props}
                            />
                        );
                    }}
                />
            </FormItem>
        </FormLayoutGroup>
    )
})
