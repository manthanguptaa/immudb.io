# vcn-powershell
PowerShell Scripts for CodeNotary vcn

## vcn-folder-watch.ps
That Powershell script watches a defined directory on your system and notarizes files that are stored here using your [CodeNotary.io account ](https://dashboard.codenotary.io/auth/signup)

Make sure to download the vcn binary as well: [CodeNotary vcn cli](https://github.com/vchain-us/vcn/releases/latest)

You only need to change the variables in the beginning of the script according to your environment:
- $vcnpath
- $watcher.Path
- $watcher.IncludeSubdirectories

### run the script fully automated
If you want to fully automated, please set the following environment variables:
- VCN_USER
- VCN_PASSWORD
- VCN_NOTARIZATION_PASSWORD

You can learn more about that here: [CodeNotary vcn environment](https://docs.codenotary.io/vcn/user-guide/environments.html)