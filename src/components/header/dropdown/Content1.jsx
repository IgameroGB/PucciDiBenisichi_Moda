import styled from "@emotion/styled";

function Content1() {
  const Content = styled.div`
    display: flex;
    /* background-color: red; */
    padding: 20px 25px 0;
  `;

  const SmallBlock = styled.div`
    width: 25%;
    padding: 0 20px;
  `;

  const MediumBlock = styled.div`
    width: 50%;
    padding: 0;
    display: flex;
  `;

  const BlockTitle = styled.div`
    text-transform: uppercase;
    border-bottom: 1px solid;
    border-color: var(--dark-font);

    color: var(--dark-font);
    font-size: 13px;
    font-weight: bold;
  `;

  const List = styled.ul`
    list-style: none;
    padding: 10px 0;
  `;

  const ListItem = styled.li`
    padding: 5px 0;
    font-size: 12px;
    text-transform: uppercase;
  `;

  const ImageLink = styled.a`
    width: 50%;
  `;
  const Image = styled.img`
    display: block;
    width: 99%;
  `;

  const ImageFooter = styled.span`
    text-transform: uppercase;
    font-size: 9px;
    padding: 5px 0 0;
  `;

  return (
    <Content>
      <SmallBlock>
        <BlockTitle>Ready to wear</BlockTitle>
        <List>
          <ListItem>
            <a href="#">All</a>
          </ListItem>
          <ListItem>
            <a href="#">Clothing</a>
          </ListItem>
          <ListItem>
            <a href="#">Tops</a>
          </ListItem>
          <ListItem>
            <a href="#">Shorts & pants</a>
          </ListItem>
          {/* <ListItem>
            <a href="#">Denim</a>
          </ListItem> */}
          <ListItem>
            <a href="#">Skirts</a>
          </ListItem>
          {/* <ListItem>
            <a href="#">Knitwear</a>
          </ListItem> */}
          <ListItem>
            <a href="#">Jackets & coats</a>
          </ListItem>
          {/* <ListItem>
            <a href="#">Jumpsuits & playsuits</a>
          </ListItem> */}
        </List>
      </SmallBlock>
      <SmallBlock>
        {/* <BlockTitle>Accesories</BlockTitle>
        <List>
          <ListItem>
            <a href="#">Accesories</a>
          </ListItem>
          <ListItem>
            <a href="#">Shoes</a>
          </ListItem>
          <ListItem>
            <a href="#">Sunglases</a>
          </ListItem>
        </List> */}
        {/* <BlockTitle>Edits</BlockTitle> */}
        <BlockTitle>Empty</BlockTitle>
        <List>
          <ListItem>
            <a href="#">Empty list item</a>
          </ListItem>
          {/* <ListItem>
            <a href="#">Luminosity</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Form & light</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">In bloom</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">Fall frames</a>
          </ListItem> */}
          {/* <ListItem>
            <a href="#">In denim</a>
          </ListItem> */}
        </List>
      </SmallBlock>
      <MediumBlock>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/f23-menu-12.jpg"
            alt=""
          />
          <ImageFooter>Shop Fall RTF 2023</ImageFooter>
        </ImageLink>
        <ImageLink>
          <Image
            src="https://www.zimmermann.com/media/wysiwyg/menu-f23-drop2-2_4.jpg"
            alt=""
          />
          <ImageFooter>Explore the collection</ImageFooter>
        </ImageLink>
      </MediumBlock>
    </Content>
  );
}

export default Content1;
