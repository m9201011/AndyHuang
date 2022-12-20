import styled  from '@emotion/styled';
// import portfolioData from '../utils/portfolio.json';
// import Portfolio from '../components/portfolioList.js';
import WorkExperience from '../components/workExperience.js';
import Skills from '../components/skills.js';
import Portfolio from '../components/portfolio.js';

const RightCardWrapper = styled.div`
  width:70%;
  position: relative;
  padding: 5% 10% 5% 10%;
  margin-left: auto;
  h2{
    font-size:40px;
    margin-bottom: 20px;
  }

  @media (max-width:1199px) {
    padding: 5% 10% 5% 5%;
    width:75%;
  }
  @media (max-width:991px) {
    width:100%;
    padding:0;
    h2{
      font-size:30px;
      margin-bottom: 15px;
    }
  }
  @media (max-width:360px) {
    h2{
      font-size:26px;
    }
  }
`;

const RightCard = (currentPage) => {
    return (
        <RightCardWrapper>
            <h2>黃昰達 Hunag Shih Ta</h2>
            {
              currentPage.currentPage === 'Work' && (<WorkExperience/>)
            }
            {
              currentPage.currentPage === 'Skills' && (<Skills/>)
            }
            {
              currentPage.currentPage === 'Portfolio' && (<Portfolio/>)
            }

            {/* <DesTitle>
                工作經歷 / Work Experience
            </DesTitle>
            <DesBx>
                <div>Gaze盯睛設計 - 2021/11 ~ 2022/11</div>
                使用HTML、CSS、JavaScript製作客製化各類型動態網站，活潑有趣的動態效果展現企業價值，並進行程式效能優化提升SEO。
                <br/><br/>
                <div>M.A.K.源做視覺整合設計 - 2018/7 ~ 2021/10</div>
                使用HTML、CSS、JavaScript製作客製化商務型、CSR網站，累積多語系站、會員站切版經驗。
            </DesBx> */}

            {/* <DesTitle>
                技能 / Skills
            </DesTitle>
            <DesBx>
              <ItemBx>
                <div>HTML、CSS (熟悉)</div>
                <ul>
                    <li>1.符合w3c規範的HTML</li>
                    <li>2.SCSS管理layout樣式、變數、mixin、include</li>
                    <li>3.從0開始製作各類型網站Responsive Web Design</li>
                </ul>
              </ItemBx>
              <ItemBx>
                <div>JavaScript</div>
                <ul>
                    <li>1.JavaScript函式庫jQuery應用 (熟悉)</li>
                    <li>2.介接 Restful API (使用經驗)</li>
                    <li>3.ECMAScript6語法應用 :<br/>let & const、Template Literals、Destructuring、Arrow Function ... (使用經驗)</li>
                </ul>
              </ItemBx>
              <ItemBx>
                <div>React</div>
                <ul>
                    <li>1.React Hook :<br/>useState、useEffect ...、並使用Props資料傳遞 (使用經驗)</li>
                    <li>2.搭配emotion框架實現CSS in JS (使用經驗)</li>
                    <li>3.React環境中使用fetch API (使用經驗)</li>
                </ul>
              </ItemBx>
              <ItemBx>
                <div>Other (使用經驗)</div>
                <ul>
                    <li>Git、Chrome Dev Tool、React Developer Tools、webpack、Eslint、SEO優化觀念</li>
                   
                </ul>
              </ItemBx>
            </DesBx> */}

            {/* <DesTitle>
              作品集 / Portfolio
            </DesTitle>
            {
              portfolioData.map((item,index) => (<Portfolio name={item.name} des={item.des} webpimg={item.webpimg} jpgpimg={item.jpgpimg} link={item.link} key={item.name}/>))
            } */}
            
            
        </RightCardWrapper>
    )
}

export default RightCard;