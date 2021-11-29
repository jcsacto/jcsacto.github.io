mos = {
    "objectName": "SIGOPTFLAGDLGPRX",
    "className": "psdi.app.appsetup.virtual.SigOptionFlagDlgProxySet",
    "description": "Required for Advanced Options dialog",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": false,
    "isMainObject": false,
    "uniqueId": null,
    "primaryKeyColumns": [],
    "logicalRelationships": [],
    "targetLogicalRelationships": [],
    "columns": [
        {
            "attributeName": "FLAGCODE",
            "required": true,
            "persistent": false,
            "title": "Flag",
            "remarks": "Code of the Flag set for sigoption",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VALUE",
            "required": false,
            "persistent": false,
            "title": "Launch Entry Name",
            "remarks": "Launch Entry",
            "sameAsAttribute": "LAUNCHENTRYNAME",
            "sameAsObject": "MAXLAUNCHENTRY"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "MAXLAUNCHENTRY",
            "target": "MAXLAUNCHENTRY",
            "remarks": "Links the launch entry loookup in the Advanced Sigoption Flag dialog",
            "whereClause": "launchentryname=:value",
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "SIGOPTFLAGDLG",
            "source": "SIGOPTION",
            "remarks": "Used to link the dialog proxy to the Advanced Sigoption Flag dialog",
            "whereClause": "1=1",
            "cardinality": "UNDEFINED"
        }
    ]
}