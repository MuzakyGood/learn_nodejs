# Important PowerShell Commands

## A. Setup for npm and npx
1. Use this command in powershell to **enable** bin path permission from npm and npx

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

2. After that press ``Y`` for accepted

## B. Back to origin
1. Use this command in powershell to **disable** bin path permission from npm and npx

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Restricted
```

2. After that press ``Y`` for accepted

3. To check the execution policy value

```bash
Get-ExecutionPolicy -List
```