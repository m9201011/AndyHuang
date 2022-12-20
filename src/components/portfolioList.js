import styled  from '@emotion/styled';
const PortfolioListWrapper = styled.div`
    animation: fade 2s ease forwards;
    @keyframes fade {
        0%{
        opacity: 0;
        }
        100%{
        opacity: 1;
        }
    }
    &:not(:last-child){
        margin-bottom:40px;
    }
    picture{
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 100%;
        display:flex;
    }
    a{
        picture img{
            transition: .4s ease;
        }
        @media (min-width:992px) {
            &:hover{
                picture img{
                    transform: scale(1.05);
                }
                div{
                    color:#004B97;
                }
            }
        }
        
    }
`;
const TitleFlex = styled.div`
    display:flex;
    margin-bottom:10px;
    div{
        color:#000;
        transition: .4s ease;
        &:nth-of-type(2){
            margin-left:10px;
            padding-left:20px;
            position: relative;
            &::before{
                position: absolute;
                content: '';
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                width: 10px;
                height: 3%;
                background: #000;
            }
        }
    }
`;

const PortfolioList = ({name,des,webpimg,jpgpimg,link}) => {
    // const porWebp = require(webpimg);
    // const porImg = require(jpgpimg);

    // console.log(webpimg.replace(/\""/g,""));
    // console.log(webpimg);
    // console.log(jpgpimg);
    // webpimg === '\'./../images/gaze.webp\'' && console.log(true); 
    // webpimg === `./../images/gaze.webp` && console.log(true); 
    // console.log(webpimg === `./../images/gaze.webp`)
    return (
        <PortfolioListWrapper>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <TitleFlex>
                    <div>{name}</div>
                    <div>{des}</div>
                </TitleFlex>
                <picture>
                    <source srcSet={process.env.PUBLIC_URL + `${webpimg}`} type="image/webp"/>
                    <img src={process.env.PUBLIC_URL + `${jpgpimg}`} alt="作品展示圖"/>
                </picture>
            </a>
        </PortfolioListWrapper>
    )
}

export default PortfolioList;