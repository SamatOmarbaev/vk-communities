import { CardGrid, Group, Header } from "@vkontakte/vkui"
import { CardItem } from "../CardItem/CardItem"
import { IGroup } from "../../types"
import { memo, useEffect, useState } from "react";
import { Skeleton } from "../Skeleton/Skeleton";
import './CardList.css'
import groupsData from '../../groups.json';

interface CardListProps {
    groups: IGroup[];
    setGroups: (group: IGroup[]) => void;
}

export const CardList = memo(({groups, setGroups}: CardListProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const getGroups = () => {
            setIsLoading(true)
            setTimeout(() => {
                if (groupsData.result === 1 && groupsData.data) {
                    setGroups(groupsData.data);
                    setIsLoading(false);
                } else {
                    console.error('Ошибка при получении списка групп');
                    setIsLoading(false)
                }
            }, 1000);
        };
    
        getGroups();
    }, [setGroups]);

    return (
        <Group
            header={<Header>Список групп</Header>}
            style={{margin: '0 1rem'}}
        >
            <CardGrid size="l" className='list'>
                {isLoading
                    ?   [...Array(12)].map((_, index) => (
                            <Skeleton height={260} key={index} width={'100%'} border=".375rem" />
                        ))
                    :   groups.map(group => (
                            <CardItem group={group} key={group.id} /> 
                        ))
                }
            </CardGrid>
        </Group>
    )
})
