import { memo } from "react";
import { Card, Div, Paragraph, Title } from "@vkontakte/vkui"
import { IGroup } from "../../types"
import './CardItem.css'
import { FriendsList } from "../FriendsList/FriendsList";

interface CardItemProps {
    group: IGroup;
}

export const CardItem = memo((props: CardItemProps) => {
    const { group } = props

    return (
        <Card mode="outline-tint" className="card">
            <Div className="cardDiv">
                <Title Component={'h2'}>{group.name}</Title>
                {group.avatar_color && (
                    <Div style={{ 
                            width: '100px', 
                            height: '100px', 
                            backgroundColor: group.avatar_color, 
                            borderRadius: '50%', 
                            margin: '0 auto'
                        }} 
                    />
                )}
                <Paragraph Component={'p'}>{group.closed ? 'Закрытая группа' : 'Открытая группа'}</Paragraph>
                <Paragraph Component={'p'}>Кол-во подписчиков: {group.members_count}</Paragraph>
                <FriendsList friends={group.friends} />
            </Div>
        </Card>
    )
})
