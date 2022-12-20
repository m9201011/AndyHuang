import styled  from '@emotion/styled';

const LeftCardWrapper = styled.div`
  width:30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width:1199px) {
    width:25%;
  }
  @media (max-width:991px) {
    display:none;
  }
`;

const LeftCard = () => {
    const managementimage = require('./../images/Management.png');
    const managementwebp = require('./../images/Management.webp');

    return (
        <LeftCardWrapper>
            <picture>
                <source srcSet={managementwebp} type="image/webp"/>
                <img src={managementimage} alt="生活管理"/>
            </picture>
        </LeftCardWrapper>
    )
}

export default LeftCard;