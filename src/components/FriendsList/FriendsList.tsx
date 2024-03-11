import { Avatar, Cell, Group, List, 
  ModalPage, ModalPageHeader, ModalRoot, 
  Panel, Paragraph, SimpleCell, SplitCol, 
  SplitLayout, View, 
} from "@vkontakte/vkui";
import { memo, useCallback, useState } from "react";
import { User } from "../../types";
import './FriendsList.css'
import { Icon28ChevronDownOutline, Icon28ChevronRightCircle } from "@vkontakte/icons";

const MODAL_PAGE_FILTERS = 'filters';

interface MyModalProps {
  friends?: User[]
}

export const FriendsList = memo((props: MyModalProps) => {
  const {friends} = props;
  const [activeModal, setActiveModal] = useState<string>();
  const [modalHistory] = useState([]);

  const changeActiveModal = useCallback((activeModal: string) => {
    setActiveModal(activeModal);
  }, []);

  const modalBack = useCallback(() => {
    changeActiveModal(modalHistory[modalHistory.length - 2]);
  }, [modalHistory, changeActiveModal]);

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={modalBack}>
      <ModalPage
        id={MODAL_PAGE_FILTERS}
        onClose={modalBack}
        header={
          <ModalPageHeader>
            Все друзья
          </ModalPageHeader>
        }
      >
        <Group>
          <List>
            {friends 
              ? 
              (
                friends.map((friend, index) => (
                  <Cell key={index + 'fffff'} before={<Avatar />} style={{padding: '.5rem 0'}}>
                    {friend.first_name} {friend.last_name}
                  </Cell>
                ))
              )
              : <Paragraph Component={'p'} className="noFriends">
                  Друзей нет
                </Paragraph>
            }
          </List>
        </Group>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="modals">
          <Panel id="modals">
            <SimpleCell 
              after={activeModal ? <Icon28ChevronDownOutline /> : <Icon28ChevronRightCircle color="white" />} 
              onClick={() => changeActiveModal(MODAL_PAGE_FILTERS)}
            >
              Показать друзей
            </SimpleCell>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
});