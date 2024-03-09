import { memo } from "react";
import { Button, Card, Div, Paragraph, Title } from "@vkontakte/vkui"
import { IGroup } from "../../types"
import './CardItem.css'

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
                <Paragraph>{group.closed ? 'Закрытая группа' : 'Открытая группа'}</Paragraph>
                <Paragraph>Кол-во подписчиков: {group.members_count}</Paragraph>
                {group.friends && (
                    <Button
                        align={'center'}
                        appearance={'accent'}
                        mode={'primary'}
                        size={'m'}
                        onClick={() => alert(`Друзья в группе ${group.name}: ${group.friends?.map(friend => `${friend.first_name} ${friend.last_name}`).join(', ')}`)}
                        className="btn"
                    >
                        Показать друзей
                    </Button>
                )}
            </Div>
        </Card>
    )
})
