import styled  from '@emotion/styled';


const WorkExperienceWrapper = styled.div`
  animation: fade 2s ease forwards;
  @keyframes fade {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
`;
const DesTitle = styled.div`
  font-size:30px;
  font-weight: 400;
  margin-bottom: 20px;
  @media (max-width:991px) {
    font-size:22px;
    margin-bottom: 10px;
  }
`
const DesBx = styled.div`
  font-size:18px;
  font-weight: 400;

 
`
const WorkExperience = () => {
    return (
        <WorkExperienceWrapper>
            <DesTitle>
                工作經歷 / Work Experience
            </DesTitle>
            <DesBx>
                <div>Gaze盯睛設計 - 2021/11 ~ 2022/11</div>
                <br/><br/>
                <div>作品包含: </div>
                <div>盯睛設計、諭方老師奇門易數、KC design、享恩品酒生活、慈和中醫診所、仁善美中醫診所、彭燕婷中醫、存亦美學、蔡其昌民眾服務系統、中研院基因體研究中心P3實驗室 ...</div>
                <br/>
                <div>M.A.K.源做視覺整合設計 - 2018/7 ~ 2021/10</div>
                使用HTML、CSS、JavaScript製作客製化網站。<br/>
                累積商務型、CSR網站，累積多語系站、會員站切版等各類型網站切版經驗。
                <br/>
                <div>作品包含: </div>
                <div>MU : 沐目餐酒館、順昶塑膠、鑫創行銷、VEDAROMA 依蘭雅閑、台達化ESG網站、越峯電子CSR網站、JOYCOLORi、TMS全鋒事業、寰宇生物科技、壢景町、闊石 Quartz、車容坊 Oilgroup、可果國際、康特國際、全友電腦、中華民國足球協會 ...</div>
                <br/><br/>
                <div>詮睿科技 - 2023/3 ~ Now</div>
                使用React Hook , React Router , React Redux 以及使用Ant Design / Mui 等元件庫以及後台模板並使用RESTful API 製作前後台網站       
            </DesBx>
        </WorkExperienceWrapper>
       
    );
}

export default WorkExperience;