mos = {
    "objectName": "RECONTASKFLTRVAL",
    "className": "psdi.app.rcntskfltr.ReconTaskFltrValSet",
    "description": "Fields and  Values for a reconciliation task filte",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "RECONTASKFLTRVALID",
    "primaryKeyColumns": [
        "RECONTASKFLTRVALID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "RECONTASKFILTER",
            "targetObject": "RECONTASKFLTRVAL",
            "parentKeys": "FILTERNAME",
            "targetKeys": "FILTERNAME",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Reconcilation Task Filter",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "RECONTASKFLTRVALID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERNAME",
            "required": true,
            "persistent": true,
            "title": "Filter",
            "remarks": "Filter Name",
            "sameAsAttribute": "FILTERNAME",
            "sameAsObject": "RECONTASKFILTER"
        },
        {
            "attributeName": "ATTRIBUTE",
            "required": true,
            "persistent": true,
            "title": "Attribute",
            "remarks": "Name of the attribute to use as a filter. Values displayed in the lookup depend on the type specified in the Filter Type field. For assets, the following values are valid: CLASSSTRUCTUREID, CUSTODIAN, GLACCOUNT, ORGID, SITEID, STATUS, ASSETNUM, WONUM, CONTRACTNUM, COLLECTIONNUM, and USAGE. For deployed assets, the following values are valid: ASSETCLASS, ORGID, SITEID, DOMAIN, MAKEMODEL, DETECTIONTOOL, and SYSTEMROLE.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FILTERVALUE",
            "required": true,
            "persistent": true,
            "title": "Value",
            "remarks": "Specific value for the attribute specified in the Attribute field.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TASKFLTRVALKEY",
            "required": false,
            "persistent": true,
            "title": "Key",
            "remarks": "Recon task filter value key.",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "RECONTASKFILTER_RECONTASKFLTRVAL",
            "source": "RECONTASKFILTER",
            "remarks": "Asset Filter for a Task",
            "whereClause": "filtername=:filtername",
            "cardinality": "UNDEFINED"
        }
    ]
}