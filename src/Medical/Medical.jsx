import React from 'react'
import { Highlight } from '@chakra-ui/react'
import {
  Text,
  Box,
  Grid,
  Heading,

  GridItem,

  Image,
} from '@chakra-ui/react';
import {
  Table,

  Tbody,

  Tr,

  Td,

  TableContainer,
} from '@chakra-ui/react'
export default function Medical() {
  return (
    <div>

   <Box bgColor="gray.800" height="45rem">
    
   <Box maxW="1200px" mx="auto" alignItems="center"    p="1rem">
   <Heading 
              as="h1"
                  fontWeight="bold"
                  color="white"
                  fontSize={{
                    base: "3xl",
                    md: "6xl",
                  }}
                  pt= "25rem"
                  mb="1rem"
                >
               An extension support to patient monitoring & detection of early patient deterioration
                </Heading>
                <Text as="h2" fontSize="xl" fontWeight="normal" color="white" >
                User Experience design & application based on current medical device market
                </Text>
               
    </Box>
    
  
   </Box>
<Box  maxW="1200px" mx="auto" alignItems="center"    p="1rem">


<TableContainer mt="5rem"mb="5rem">
  <Table variant='simple' minWidth="5rem">

 
    <Tbody>
      <Tr>
        <Td fontWeight="bold">Client</Td>
        <Td>CUMC Medical Centre, Hong Kong</Td>
  
      </Tr>
      <Tr>
        <Td fontWeight="bold">Sector</Td>
        <Td>Bedside, Medical </Td>
       
      </Tr>
      <Tr>
        <Td fontWeight="bold">My Role</Td>
        <Td>Product design</Td>
   
      </Tr>
      <Tr>
        <Td fontWeight="bold">Project Time</Td>
        <Td>1 month</Td>

      </Tr>
    </Tbody>
  
  </Table>
</TableContainer>
{/* project overview */}
<Text as="h2" fontSize="4xl" fontWeight="bold" maxWidth="40rem" alignItems="center" ml="auto" mr="auto" >Project Overview</Text>
<Text  fontSize="xl" mb="8rem" maxWidth="40rem" alignItems="center" ml="auto" mr="auto" >
The user experience design on patient monitoring is applied to a mobile application works together with The EarlySense Vitals Surveillance system(Hillrom).
It delivers physiological data from supported monitors and ventilators to your iOS device for streaming data, waveforms, early-deterioration prevention and alerts with a different group of patients.

</Text>


{/* project overview */}
<Text as="h2" fontSize="4xl" fontWeight="bold" maxWidth="40rem" alignItems="center" ml="auto" mr="auto" >Initial User Research Summary</Text>
<Text  fontSize="xl" mb="4rem" maxWidth="40rem" alignItems="center" ml="auto" mr="auto" >
In my previous job, I was working as a medical sales engineer for a medical distributor in Hong Kong. We are the sole agent respresentative of Hillrom (US medical technology company, Parent organizations: Baxter). We keep receiving feedbacks from our customers regarding to the product design of the EarlySence Vitals Surveillance System from Hillrom. Hence we have the idea of application development in aim to improve its user experience design with the EarlySence Vitals Surveillance System.
</Text>
<Grid flexDirection='row'   justifyContent="space-around"

ml={{
  base: "0.5rem",
  md: "5rem",
}}
mr={{
  base: "0.5rem",
  md: "5rem",
}}


 templateAreas={{
  base: `"pic1" "pic2"`,
  md: `"pic1 pic2"`,
}}


>
  <GridItem gridAreas="pic1"  >
  
<Image  
                  src=
                  {`${process.env.PUBLIC_URL}/earlysense-unit-sensor.jpeg`}
                  alt="lizzie-tse-wing-shan-earlysense"
                />

  </GridItem>
  <GridItem  area="pic2">
  <Image 
                  src=
                  {`${process.env.PUBLIC_URL}/earlysense-sensor.jpeg`}
                  alt="lizzie-tse-wing-shan-earlysense"
                
                /> 
    
    </GridItem>  </Grid>
    <Text alignItems="center"pb="10rem" fontSize="sm">Current in-market product: EarlySence Vitals Surveillance System. Image source: Hillrom, "EarlySence Vitals Surveillance System". Accessed via https://www.welchallyn.com/content/welchallyn/ca/fr/products/categories/patient-monitoring/connex_centralized_clinical_surveillanc_systems/early-sense/</Text>
    </Box>
<Box maxW="1200px" mx="auto" alignItems="center"    p="1rem">
{/* feedback */}
<Text as="h2" fontSize="4xl" fontWeight="bold" maxWidth="80rem"  ml="auto" mr="auto"  mb={10}>Product features</Text>


<Grid mx="auto" maxWidth="80rem" alignItems="center" ml="auto" mr="auto" >
  {/* #1 */}
  <GridItem borderRadius="1rem" border="1px" p={6} mb={20}><Text as="h2" fontSize="lg" fontWeight="bold"  ml="auto" mr="auto" mb={3}>Desired on uninterrupted & all-in-one real-time monitoring</Text><Text as="h4" fontSize="lg"   >The receiver from the vitals surveillance system is connected to a sizable monitor by electrical wire. The data will be interferred and easily lost if patients switch bed and leave the original bed without carrying the monitor along. 
Physicians will gain immediate access to patient vitals & motion information remotely from a portable device and take appropriate action in busy clinical environment
Moreover, adding a categorization alarm settings for different patients group helps to easy management. For example, the larger the age, the upper limit of heart rate & respiratory rate.
</Text>
</GridItem>


{/* #2 */}
<GridItem borderRadius="1rem" border="1px" p={6} ><Text as="h2" fontSize="lg" fontWeight="bold" maxWidth="80rem"  ml="auto" mr="auto" mb={3}>Extensive support on early deterioration</Text><Text as="h4" fontSize="lg"  mb="5rem" >According to NHS, 
<Highlight query='NEWS(National Early Warning Score)' styles={{ px: '1', py: '1', bg: 'orange.100' }}>
NEWS(National Early Warning Score) is a tool developed by the Royal College of Physicians which improves the detection and response to clinical deterioration in adult patients and is a key element of patient safety and improving patient outcomes. 

With the use of NEWS observation chart(Image1) & thresholds and triggers chart(Image2), it help physicians have potential prediction in respond to early deterioration/fall/pressure ulcers with the early deterioration index level chart provided.  
</Highlight>



</Text>
<Image  
                  src=
                  {`${process.env.PUBLIC_URL}/NEWS.jpg`}
                  alt="lizzie-tse-wing-shan-earlysense"
                  maxHeight={'50rem'}
                  ml="auto"
                  mr="auto"
                />
<Text  fontSize="sm" mb="5rem">Image 1 - NEWS2 observation chart (reproduced from Royal College of Physicians, National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS, updated report of a working party, London: RCP, 2017)</Text>
<Image  
                  src=
                  {`${process.env.PUBLIC_URL}/NEWS-scoretable.png`}
                  alt="lizzie-tse-wing-shan-earlysense"
                  maxHeight={'20rem'}
                  ml="auto"
                  mr="auto"
                />
<Text  fontSize="sm">Image 2 - NEWS thresholds and triggers chart (reproduced from: Royal College of Physicians, National Early Warning Score (NEWS) 2: standardising the assessment of acute-illness severity in the NHS, updated report of a working party, London: RCP, 2017)</Text>


</GridItem>


<Text as="h6" fontSize="sm" p={2}  mb={20}>Citation: Jevon, P., & Shamsi, S. (2020). Using National Early Warning Score (NEWS) 2 to help manage medical emergencies in the dental practice. British Dental Journal, 229(5), 292–296. https://doi.org/10.1038/s41415-020-2024-6</Text>


{/* #3 */}
<GridItem borderRadius="1rem" border="1px" p={6} mb={40}><Text as="h2" fontSize="lg" fontWeight="bold"  ml="auto" mr="auto" mb={3}>Ensure Patient Data Security</Text><Text as="h4" fontSize="lg"   >It is hard to have full access of advanced vitals surveillance system linked to the local hospital(For example, hospitals in Hong Kong China) as it requires the approval from local hospital on data sharing & security issue. By implementing the right privacy and security considerations along with compliances, this application works as an external party for data protection.

</Text>
</GridItem>




</Grid>

<Text as="h2" fontSize="4xl" fontWeight="bold"  ml="auto" mr="auto"  mb={40}>Initial ideas
<Image  mt={10}
                  src=
                  {`${process.env.PUBLIC_URL}/IMG-4382 (1).jpg`}
                  alt="lizzie-tse-wing-shan-UX-1"
                /></Text>

<Text as="h2" fontSize="4xl" fontWeight="bold" ml="auto" mr="auto"  mb={10}>High-fidelity prototype</Text>


<Grid  

templateColumns={{
  base: "1fr",
  md: "1fr 1fr 1fr",
}}
templateRows={{
  base: "1fr",
  md: "1fr 1fr",
}}

>{/* 1 */}
  <GridItem pb={4} >
  <a href="https://raw.githubusercontent.com/LizzieTse0617/personal_portfolio/main/public/Frame 1531.png" target="_blank" rel="noreferrer">
  <Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1531.png`}
                  alt="lizzie-tse-wing-shan-UX-1"
                /></a>
                <Box pl={4} pr={4}>
    <Text fontWeight="bold"fontSize={'md'}>
    Step1 : homepage</Text><Text>Nurse will open the app,  and add patients to the card, after connecting the apps to he corresponding pad sensor by bluetooth</Text></Box></GridItem>
  {/* 2 */}
  <GridItem pb={4} >
  <a href="https://raw.githubusercontent.com/LizzieTse0617/personal_portfolio/main/public/Frame 1530.png" target="_blank" rel="noreferrer">
  <Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1530.png`}
                  alt="lizzie-tse-wing-shan-UX-2"
                /></a>
                <Box pl={4} pr={4}>
    <Text fontWeight="bold"fontSize={'md'}>
    Step2 : Patient info page</Text><Text>Filling patient name, gender, age</Text></Box></GridItem>
   {/* 3 */}
   <GridItem pb={4} >
   <a href="https://raw.githubusercontent.com/LizzieTse0617/personal_portfolio/main/public/Frame 1532.png" target="_blank" rel="noreferrer">
  <Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1532.png`}
                  alt="lizzie-tse-wing-shan-UX-3"
                /></a>
                <Box pl={4} pr={4}>
    <Text fontWeight="bold"fontSize={'md'}>
    Step3 : Alarm setting</Text><Text>There are two kinds of alarm setting for single patient:  (1) default , and (2) customized. For example, patients with low level of consciousness(difficult to arouse or drowsy), they could have a low sensitivity movement level and constant hours of turn reminder alarm.</Text></Box></GridItem>
    {/* 4 */}
    <GridItem pb={10} >
    <a href="https://raw.githubusercontent.com/LizzieTse0617/personal_portfolio/main/public/Frame 1529.png" target="_blank" rel="noreferrer">
  <Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1529.png`}
                  alt="lizzie-tse-wing-shan-UX-4"
                /></a>
                <Box pl={4} pr={4}>
    <Text fontWeight="bold"fontSize={'md'}>
    Step4 : Repeat, add more patients, main page</Text><Text>Preview and monitoring patient vitals in real-time in nurse station</Text></Box></GridItem>
     {/* 5 */}
     <GridItem pb={10} >
     <a href="https://raw.githubusercontent.com/LizzieTse0617/personal_portfolio/main/public/Frame 1533.png" target="_blank" rel="noreferrer">
  <Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1533.png`}
                  alt="lizzie-tse-wing-shan-UX-5"
                /></a>
                <Box pl={4} pr={4}>
    <Text fontWeight="bold"fontSize={'md'}>
    Step5 : Real-time monitoring</Text><Text>Physicians can view Heart rate & respiratory rate in this page. Besides, there is a button to capture the figures of patient HR & RR instantly and then deplicate them for calculating early deterioration index.</Text></Box></GridItem>
   {/* 6 */}
   <GridItem pb={10} >
   <a href="https://raw.githubusercontent.com/LizzieTse0617/personal_portfolio/main/public/Frame 1534.png" target="_blank" rel="noreferrer">
  <Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1534.png`}
                  alt="lizzie-tse-wing-shan-UX-6"
                /></a>
                <Box pl={4} pr={4}>
    <Text fontWeight="bold"fontSize={'md'}>
    Step6 : Early deterioration index prediction</Text><Text>Input or select 4 more figures to predict early deterioration index: 

(1)Systolic blood pressure(mmHg), (2) body temperature (3)Oxygen saturations(%), (4)Level of consciousness

Giving a certain number of records with NEWS Score, it helps physicians to make action according to different level of clinical risk.
</Text></Box></GridItem>
 
  </Grid>
  <Box p={6} mt={10}mb={6} boxShadow="2xl" rounded="md" bg="white" alignItems="center" ml={'auto'}mr={'auto'}maxWidth="60rem">
 <Text as="h2" fontSize="2xl" fontWeight="bold" textAlign="center" mt={4}ml="auto" mr="auto" mb={8}>Patient card</Text>
<Grid 

templateColumns={{
  base: "1fr",
  md: "1fr 1fr",
}}
templateRows={{
  base: "1fr",
  md: "1fr 1fr",
}}>

    {/* set1 */}
<GridItem>

<Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1538.png`}
                  alt="lizzie-tse-wing-shan-message-card"
                />


  </GridItem> <GridItem alignItems={"center"} ml={4}mt={'auto'}mb={'auto'}>Generally, there are 4 parts in a single patient card:

Part(1) patient setting button, patient name, patient bed number;

Part(2) real-time monitoring, including: Heart rate, Respiratory rate;

Part(3)  status on bluetooth connection, sensor pad battery,  turn reminder, night mode alarm, early deterioration alarm, and finally the sound button;

Part(4)  area for alarm & message display
</GridItem>
    {/* set2 */}
    <GridItem>
<Image  
                  src=
                  {`${process.env.PUBLIC_URL}/Frame 1536.png`}
                  alt="lizzie-tse-wing-shan-message-card"
                />
  </GridItem> <GridItem alignItems={"center"} ml={4}mt={'auto'}mb={'auto'}>The card, message and alarm are highlighted in red to alert physicians in below conditions:

(1) heart rate/respiratory rate higher/lower than the configurable settings;
(2) pad is not connected (bluetooth);
(3) out of battery;
(4) any alarm reminder 

</GridItem>

</Grid>
 </Box>

<Box textAlign="center" mt={40} mb={40}ml={'auto'}mr={'auto'} >
 <Text fontSize={'xl'}>
For more detailed on this user experience design. Please feel free to contact me.
              </Text>
              </Box>         

</Box>

    </div>
  )
}
