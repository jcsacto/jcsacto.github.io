mos = {
    "objectName": "CREATERELINPUT",
    "className": "psdi.app.contract.virtual.CreateRelInputSet",
    "description": "Parameters for Release creation from Contracts.",
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
            "attributeName": "PONUM",
            "required": false,
            "persistent": false,
            "title": "PO",
            "remarks": "Release purchase order number.",
            "sameAsAttribute": "PONUM",
            "sameAsObject": "PO"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "A brief description of this RFQ.",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "GLDEBITACCT",
            "required": false,
            "persistent": false,
            "title": "GL Debit Account",
            "remarks": "The GLDebit Account for the Release PO",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LOCATION",
            "required": false,
            "persistent": false,
            "title": "Location",
            "remarks": "The location to charge for the release PO.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "WONUM",
            "required": false,
            "persistent": false,
            "title": "Work Order",
            "remarks": "The work order numberassociated with this RFQ.",
            "sameAsAttribute": "WONUM",
            "sameAsObject": "WORKORDER"
        },
        {
            "attributeName": "ASSETNUM",
            "required": false,
            "persistent": false,
            "title": "Asset",
            "remarks": "Asset Num",
            "sameAsAttribute": "ASSETNUM",
            "sameAsObject": "ASSET"
        },
        {
            "attributeName": "STORELOC",
            "required": false,
            "persistent": false,
            "title": "Storeroom",
            "remarks": "The storeroom location of the asset associated with this work order.",
            "sameAsAttribute": "LOCATION",
            "sameAsObject": "LOCATIONS"
        },
        {
            "attributeName": "RFQNUM",
            "required": false,
            "persistent": false,
            "title": "RFQ",
            "remarks": "A unique identifier for this RFQ.",
            "sameAsAttribute": "RFQNUM",
            "sameAsObject": "RFQ"
        },
        {
            "attributeName": "SITEID",
            "required": false,
            "persistent": false,
            "title": "Site",
            "remarks": "Site identifier",
            "sameAsAttribute": "SITEID",
            "sameAsObject": "SITE"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization ",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Vendor from which the release should be created.",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Name",
            "remarks": "Vendor Description",
            "sameAsAttribute": "NAME",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Contract Number",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision Number",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        }
    ],
    "outgoingRelationships": [
        {
            "name": "VENDOR",
            "target": "COMPANIES",
            "remarks": "Relationship to the Companies table, used to find all company records for a given company. (createrelinput.vendor=companies.company)",
            "whereClause": "company=:vendor and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CONTRACTAUTH",
            "target": "CONTRACTAUTH",
            "remarks": "Relationship to the ContractAuth table, used to find all ContractAuth records for a given site and org. (createrelinput.orgid=contractauth.orgid and createrelinput.siteid=contractauth.authsiteid)",
            "whereClause": "contractnum=:contractnum and revisionnum=:revisionnum and authsiteid=:siteid and authorgid=:orgid and isdefault=:yes",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DRILLDOWN",
            "target": "DRILLDOWN",
            "remarks": "Relationship from the CREATERELINPUT to the non-persistent DrillDown table. (No where clause). The resulting set will contain zero objects. This relationship is used when the DrillDown page is launched from a location or asset field.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "target": "VIEWCONTINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWWOPMS",
            "target": "VIEWWOPMS",
            "remarks": "Relationship from the CREATERELINPUT to the non-persistent VIEWWOPMS table. (No where clause.) The resulting set will contain zero objects. This relationship is used when the View Work Details dialog is launched from a location or asset field",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ],
    "incomingRelationships": [
        {
            "name": "CREATERELINPUT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the non-persistent CreateRelInput object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the create release action page to create a release from a given purchase contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "CREATERELINPUT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the non-persistent CreateRelInput object. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the create release action page to create a release from a given software contract.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}