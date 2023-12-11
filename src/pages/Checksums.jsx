import {PageBodyContainer, PageContainer} from "../components/PageContainer";
import {PageHeader} from "../components/PageHeader";


const ChecksumData = [
    {
        name: "pypy3.10-v7.3.13 sha256",
        data: [
            {
                checksum: "ac476f01c9653358404f2e4b52f62307b2f64ccdb8c96dadcbfe355824d81a63",
                platform: "pypy3.10-v7.3.13-aarch64.tar.bz2"
            },
            {
                checksum: "bfba57eb1f859dd0ad0d6fe841bb12e1256f1f023c7fbca083b536cccbc1233b",
                platform: "pypy3.10-v7.3.13-linux32.tar.bz2"
            },
            {
                checksum: "54936eeafd9350a5ea0375b036272a260871b9bca82e1b0bb3201deea9f5a442",
                platform: "pypy3.10-v7.3.13-linux64.tar.bz2"
            },
            {
                checksum: "efb3007b7aace0af6e3b30d381088a5bbc175973a6627b6b0d624a2ca2dc63ce",
                platform: "pypy3.10-v7.3.13-macos_arm64.tar.bz2"
            },
            {
                checksum: "2c6238b9ece7b94ffdfd1d9b50619edef4b169a5c78adcdb691fce6709cd6610",
                platform: "pypy3.10-v7.3.13-macos_x86_64.tar.bz2"
            },
            {
                checksum: "3c813c7efa6a026b281313b299c186c585155fc164c7538e65d41efdabff87c9",
                platform: "pypy3.10-v7.3.13-s390x.tar.bz2"
            },
            {
                checksum: "4ac1733c19d014d3193c804e7f40ffccbf6924bcaaee1b6089b82b9bf9353a6d",
                platform: "pypy3.10-v7.3.13-src.tar.bz2"
            },
            {
                checksum: "828fc66eca1c097e44bc910c78ab773a98747268c7ce264da97022e5aca358dc",
                platform: "pypy3.10-v7.3.13-src.zip"
            },
            {
                checksum: "5b99422fb8978b2f4bbf97961bca49963a82dc47c2fa51b7d23c493db3a2e0f0",
                platform: "pypy3.10-v7.3.13-win64.zip"
            },
        ],
    },
    {
        name: "pypy3.9-v7.3.13 sha256",
        data: [
            {
                checksum: "317d7876c5825a086f854253648b967a432b993ce87695d2895d3ad6ed0d2716",
                platform: "pypy3.9-v7.3.13-aarch64.tar.bz2"
            },
            {
                checksum: "ac695238b4a3635ac6b482e74e04e2ea78b31acca0decd5de601dfd2f4ebf35a",
                platform: "pypy3.9-v7.3.13-linux32.tar.bz2"
            },
            {
                checksum: "323b05a9f607e932cda1995cbe77a96e4ea35994631aa6d734c8035e8479b74e",
                platform: "pypy3.9-v7.3.13-linux64.tar.bz2"
            },
            {
                checksum: "a07b17a790a1952b551e69d47d77a5546ad5e666ed1bd90b9ad60baaca6aa51e",
                platform: "pypy3.9-v7.3.13-macos_arm64.tar.bz2"
            },
            {
                checksum: "180802aa0122d4a05ec480bf3130c78591ba88fdde25d8e65a92d4a798b318a3",
                platform: "pypy3.9-v7.3.13-macos_x86_64.tar.bz2"
            },
            {
                checksum: "213c88f652a99c4dc4e8e00b4b5b58f381c7f7e9ea1a9b65801fc0eb1e50df0a",
                platform: "pypy3.9-v7.3.13-s390x.tar.bz2"
            },
            {
                checksum: "bc6147268105e7cb3bd57b401e6d97f66aa4ede269104b2712a7cdd9f02f68cd",
                platform: "pypy3.9-v7.3.13-src.tar.bz2"
            },
            {
                checksum: "5036ba37fb07116754f3eab2df6d41f405f947ffbf8d99d62bf743dc1d2c195f",
                platform: "pypy3.9-v7.3.13-src.zip"
            },
            {
                checksum: "85745a2055c4a8cefac9b6d3f7f305b1edaaf62468c8f640b4511d9dd21d091c",
                platform: "pypy3.9-v7.3.13-win64.zip"
            },
        ]
    },
    {
        name: "pypy2.7-v7.3.13 sha256",
        data: [
            {
                checksum: "f1e20f833cc86a097c1f1318069fc17d01c3988678c1438fe27ed567fcb5cfd0",
                platform: "pypy2.7-v7.3.13-aarch64.tar.bz2"
            },
            {
                checksum: "b727d2e759a740f45bab1e333029d001c4384b52949bcbb4bd2ad7912eae8dad",
                platform: "pypy2.7-v7.3.13-linux32.tar.bz2"
            },
            {
                checksum: "e41ceb5dc6c4d3a9311ed5f88edfeedbf3e8abbd1ed3c4f2e151a90a5cf4e1d7",
                platform: "pypy2.7-v7.3.13-linux64.tar.bz2"
            },
            {
                checksum: "5b86cf0750abc188a0355380d10c7bab1dec51b610cde23ce78f30a9ef296618",
                platform: "pypy2.7-v7.3.13-macos_arm64.tar.bz2"
            },
            {
                checksum: "50769df0091e8fa51c9e4356e0cb204e6f6aa54f502ec5a6e55aef03d0ac5675",
                platform: "pypy2.7-v7.3.13-macos_x86_64.tar.bz2"
            },
            {
                checksum: "fbb2f3d92831c02b094f17e9609b95a6202d4bdcddae437e380ab14388d4556e",
                platform: "pypy2.7-v7.3.13-s390x.tar.bz2"
            },
            {
                checksum: "976984bc6ca5ec9d37ae4e219b020cbed2751d1a02267033f59ed700ba8cec40",
                platform: "pypy2.7-v7.3.13-src.tar.bz2"
            },
            {
                checksum: "34976f32358349b535081d5b5d48759d6f112a31352dc11c15dcfea44bb041d8",
                platform: "pypy2.7-v7.3.13-src.zip"
            },
            {
                checksum: "0dc9c18f91f2aee97b95eaec2244e3b22e0183095f359c410d0090c54413dadc",
                platform: "pypy2.7-v7.3.13-win64.zip"
            },
        ]
    },
    {
        name: "pypy3.10-v7.3.12 sha256",
        data: [
            {
                checksum: "26208b5a134d9860a08f74cce60960005758e82dc5f0e3566a48ed863a1f16a1",
                platform: "pypy3.10-v7.3.12-aarch64.tar.bz2"
            },
            {
                checksum: "811667825ae58ada4b7c3d8bc1b5055b9f9d6a377e51aedfbe0727966603f60e",
                platform: "pypy3.10-v7.3.12-linux32.tar.bz2"
            },
            {
                checksum: "6c577993160b6f5ee8cab73cd1a807affcefafe2f7441c87bd926c10505e8731",
                platform: "pypy3.10-v7.3.12-linux64.tar.bz2"
            },
            {
                checksum: "45671b1e9437f95ccd790af10dbeb57733cca1ed9661463b727d3c4f5caa7ba0",
                platform: "pypy3.10-v7.3.12-macos_arm64.tar.bz2"
            },
            {
                checksum: "dbc15d8570560d5f79366883c24bc42231a92855ac19a0f28cb0adeb11242666",
                platform: "pypy3.10-v7.3.12-macos_x86_64.tar.bz2"
            },
            {
                checksum: "043c13a585479428b463ab69575a088db74aadc16798d6e677d97f563585fee3",
                platform: "pypy3.10-v7.3.12-s390x.tar.bz2"
            },
            {
                checksum: "86e4e4eacc36046c6182f43018796537fe33a60e1d2a2cc6b8e7f91a5dcb3e42",
                platform: "pypy3.10-v7.3.12-src.tar.bz2"
            },
            {
                checksum: "191c275e3f6f2785da783cc7e951cc53cdf9df3b42d4533cd121c526e0b79991",
                platform: "pypy3.10-v7.3.12-src.zip"
            },
            {
                checksum: "8c3b1d34fb99100e230e94560410a38d450dc844effbee9ea183518e4aff595c",
                platform: "pypy3.10-v7.3.12-win64.zip"
            },
        ]
    },
    {
        name: "pypy3.9-v7.3.12 sha256",
        data: [
            {
                checksum: "e9327fb9edaf2ad91935d5b8563ec5ff24193bddb175c1acaaf772c025af1824",
                platform: "pypy3.9-v7.3.12-aarch64.tar.bz2"
            },
            {
                checksum: "aa04370d38f451683ccc817d76c2b3e0f471dbb879e0bd618d9affbdc9cd37a4",
                platform: "pypy3.9-v7.3.12-linux32.tar.bz2"
            },
            {
                checksum: "84c89b966fab2b58f451a482ee30ca7fec3350435bd0b9614615c61dc6da2390",
                platform: "pypy3.9-v7.3.12-linux64.tar.bz2"
            },
            {
                checksum: "0e8a1a3468b9790c734ac698f5b00cc03fc16899ccc6ce876465fac0b83980e3",
                platform: "pypy3.9-v7.3.12-macos_arm64.tar.bz2"
            },
            {
                checksum: "64f008ffa070c407e5ef46c8256b2e014de7196ea5d858385861254e7959f4eb",
                platform: "pypy3.9-v7.3.12-macos_x86_64.tar.bz2"
            },
            {
                checksum: "20d84658a6899bdd2ca35b00ead33a2f56cff2c40dce1af630466d27952f6d4f",
                platform: "pypy3.9-v7.3.12-s390x.tar.bz2"
            },
            {
                checksum: "e7a2046c7e6c25fc386abbb5132e92a7cc2491e3935699a946cb5dcbb342c2aa",
                platform: "pypy3.9-v7.3.12-src.tar.bz2"
            },
            {
                checksum: "c65e4082b6da1660041ccb23823e1cbd7759377c391f050e7c1ccad2220f08c0",
                platform: "pypy3.9-v7.3.12-src.zip"
            },
            {
                checksum: "0996054207b401aeacace1aa11bad82cfcb463838a1603c5f263626c47bbe0e6",
                platform: "pypy3.9-v7.3.12-win64.zip"
            },
        ]
    },
    {
        name: "pypy2.7-v7.3.12 sha256",
        data: [
            {
                checksum: "e04dcb6286a7b4724ec3f0e50d3cc1ba8583301dd1658c06d7f37599e4201c59",
                platform: "pypy2.7-v7.3.12-aarch64.tar.bz2"
            },
            {
                checksum: "abf3ae477bd0e526ac6dcefe0bfa845e1535aa053342c0d641219bfcde4b9b56",
                platform: "pypy2.7-v7.3.12-linux32.tar.bz2"
            },
            {
                checksum: "1a61a2574b79466f606010f2999a2b995bd96cd085f91a78ebdd3d5c2c40e81d",
                platform: "pypy2.7-v7.3.12-linux64.tar.bz2"
            },
            {
                checksum: "6b747aa076ae8597e49603c5dec4ca5935a1a0a132d7404a559be96a260d9bf7",
                platform: "pypy2.7-v7.3.12-macos_arm64.tar.bz2"
            },
            {
                checksum: "6e89ffdd15537ce4ffce3145b65ee57c2e9c952892bd95b934012d2f009f503b",
                platform: "pypy2.7-v7.3.12-macos_x86_64.tar.bz2"
            },
            {
                checksum: "80c0154d8b0949f9dc6a227c322abbc9590c8ae4c9f11c13bf4022aa38b82064",
                platform: "pypy2.7-v7.3.12-s390x.tar.bz2"
            },
            {
                checksum: "dd61d88da274c2ce2cec77667d4a3df9a652bcc50e26f90991d4dd0af66bccf4",
                platform: "pypy2.7-v7.3.12-src.tar.bz2"
            },
            {
                checksum: "99cfea9862299cb043914167f4ddc69171c3f38462b6e1ab170df0aab423ca0f",
                platform: "pypy2.7-v7.3.12-src.zip"
            },
            {
                checksum: "84cd3b98812d47a1ddb36f3417cc96b3dbdfa32c2b4e16438f205e1253f7ccea",
                platform: "pypy2.7-v7.3.12-win64.zip"
            },
        ]
    },
    {
        name: "pypy3.10-v7.3.12rc2 sha256",
        data: [
            {
                checksum: "a6dc89b8100f423d5f8f5f579db3691e0ec5f14c2d92d529d70054263e202810",
                platform: "pypy3.10-v7.3.12rc2-aarch64.tar.bz2"
            },
            {
                checksum: "5607812d1fc9ec62956555a88b75f9178fadba090759f7c0941341b9d761e6ef",
                platform: "pypy3.10-v7.3.12rc2-linux32.tar.bz2"
            },
            {
                checksum: "6be46911c20152de7d317cf8b2b7c83933a18a9d4193c41e0b70810381fc8d09",
                platform: "pypy3.10-v7.3.12rc2-linux64.tar.bz2"
            },
            {
                checksum: "7c353cce25d76482e6b03e298891e7a5433b1c825391bc9f14b93abdd365276b",
                platform: "pypy3.10-v7.3.12rc2-macos_arm64.tar.bz2"
            },
            {
                checksum: "098e408004813c126f09989588d586428982278c2a79a5f216f55b29db2f05de",
                platform: "pypy3.10-v7.3.12rc2-macos_x86_64.tar.bz2"
            },
            {
                checksum: "2a842af10a5b1f3be97866af21a7108951c45af7b0ffb757a8e1e1ffd2c76718",
                platform: "pypy3.10-v7.3.12rc2-s390x.tar.bz2"
            },
            {
                checksum: "d8c51b7bb88dd1343195d088c95b4b53c704ae2c7a517ba8d8f8c728bf150683",
                platform: "pypy3.10-v7.3.12rc2-src.tar.bz2"
            },
            {
                checksum: "cc695d4e48bc29867e171071524d97cd4cd903ec965ee0748c3dde2b012ae36a",
                platform: "pypy3.10-v7.3.12rc2-src.zip"
            },
            {
                checksum: "cd3b1b409d41ea694a2d22f15afcab12305c058b8fa2a197c49e96b1c5fb776c",
                platform: "pypy3.10-v7.3.12rc2-win64.zip"
            },
        ]
    },
    {
        name: "pypy3.9-v7.3.12rc2 sha256",
        data: [
            {
                checksum: "0e50aafa4e92413573cff9d579613175e5cdc128bda91a47154c9909b47c2f4c",
                platform: "pypy3.9-v7.3.12rc2-aarch64.tar.bz2"
            },
            {
                checksum: "37335affc962acd79fcd1f08cce19c3d2a3d2d2f6e9ba73d6c804160fd42b471",
                platform: "pypy3.9-v7.3.12rc2-linux32.tar.bz2"
            },
            {
                checksum: "79a3d32a21534d784f2ac4934d157354aba4871b72c39ac7908e9d853c16c3ad",
                platform: "pypy3.9-v7.3.12rc2-linux64.tar.bz2"
            },
            {
                checksum: "4b4adfb435c3677bf7c518413c2c53282789ceadd747bec19ed42ce0eb7192ed",
                platform: "pypy3.9-v7.3.12rc2-macos_arm64.tar.bz2"
            },
            {
                checksum: "3b29d34919f53136a2272363d819eb4e678368a01d5a182feae04a78a505d15d",
                platform: "pypy3.9-v7.3.12rc2-macos_x86_64.tar.bz2"
            },
            {
                checksum: "9d760b96db54f8d51c47c78397d70dbf61e1144de5afe6840deb3b9a7c265381",
                platform: "pypy3.9-v7.3.12rc2-s390x.tar.bz2"
            },
            {
                checksum: "4835d2f3814c92851f7930398f397cd0e938de165329c019d86561d9482c9daf",
                platform: "pypy3.9-v7.3.12rc2-src.tar.bz2"
            },
            {
                checksum: "453d84e4104216c23a466fc58f58231c051eafabf258c1c907b41ffe9955219b",
                platform: "pypy3.9-v7.3.12rc2-src.zip"
            },
            {
                checksum: "559fa00f89eab23c87ac2132ef30fb456631f4ff4bb8009d60900be57594dbea",
                platform: "pypy3.9-v7.3.12rc2-win64.zip"
            },
        ]
    },
]

const Checksums = () => {
    return (
        <PageContainer>
            <PageHeader text={"Checksums"} />
            <PageBodyContainer>
                {
                    ChecksumData.map((eachChecksum) => (
                        <>
                            <div>Here are the checksums {eachChecksum.name}</div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Checksum</th>
                                            <th>Platform</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            eachChecksum.data.map(({checksum, platform}) => (
                                                <tr>
                                                    <td>{checksum}</td>
                                                    <td>{platform}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ))
                }
            </PageBodyContainer>
        </PageContainer>
    )
}

export default Checksums;