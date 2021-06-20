import credentials from '../../../credentials/google-sheets-api.json'
import {GoogleSpreadsheet} from 'google-spreadsheet'


export default async (req, res) => {

  const doc = new GoogleSpreadsheet('1YdVPwT7f9H-3ADXyMtKSP6JZ-r60Ans51EpgzruzIcw');

  await doc.useServiceAccountAuth({
    client_email: credentials.client_email,
    private_key: credentials.private_key
  });

  await doc.loadInfo(); // Carrega as infos da planilha
  console.log('Titulo da planilha', doc.title);

  const sheet = doc.sheetsByIndex[0];
  const rows = await sheet.getRows();


  const temploe2e = rows.map(({
    consultor, 
    carteirizadas, 
    VA, 
    VR,
    PC,
    VRobjetivo,
    PCobjetivo,
    MetaDia

  }) =>{

    return {
      consultor,
      carteirizadas,
      VA,
      VR,
      PC,
      VRobjetivo,
      PCobjetivo,
      MetaDia
    }
  })

  console.log(temploe2e);
  
  res.send({
    title: doc.title,
    totalRow: sheet.rowCount,
    temploe2e,
  })
}
