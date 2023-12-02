import lighthouse from '@lighthouse-web3/sdk';

const RegisterProperty = () => {
    const progressCallback = (progressData) => {
        let percentageDone =
            100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
        console.log(percentageDone);
    };
    
    const uploadFile = async (file) => {
        // Push file to lighthouse node
        // Both file and folder are supported by upload function
        // Third parameter is for multiple files, if multiple files are to be uploaded at once make it true
        // Fourth parameter is the deal parameters, default null
        const output = await lighthouse.upload(file, "2ee6b82e.9a1e6ab8e87b40c69c5d918f82d3d9cb", false, null, progressCallback);
        console.log('File Status:', output);
        /*
          output:
            data: {
              Name: "filename.txt",
              Size: 88000,
              Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
            }
          Note: Hash in response is CID.
        */

        console.log('Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash);
    }

    const RetriveUploads = async() =>{
        const apiKey = '2ee6b82e.9a1e6ab8e87b40c69c5d918f82d3d9cb'; // Make sure to replace with your public key
        const uploads = await lighthouse.getUploads(apiKey);

        // Display the list of uploaded files
        console.log(uploads);
    }

    return (
        <>
        Register Your Property
        </>
    );
}

export default RegisterProperty