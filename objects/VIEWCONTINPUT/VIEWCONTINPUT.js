mos = {
    "objectName": "VIEWCONTINPUT",
    "className": "psdi.app.asset.virtual.ViewContInputSet",
    "description": "Non-persistent MboSet for viewing contracts.",
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
            "attributeName": "CONTRACTNUM",
            "required": false,
            "persistent": false,
            "title": "Contract",
            "remarks": "Contract number of the contract that covers the asset.",
            "sameAsAttribute": "CONTRACTNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "REVISIONNUM",
            "required": false,
            "persistent": false,
            "title": "Revision",
            "remarks": "Revision number of the contract",
            "sameAsAttribute": "REVISIONNUM",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of the contract",
            "sameAsAttribute": "DESCRIPTION",
            "sameAsObject": "PR"
        },
        {
            "attributeName": "CONTRACTTYPE",
            "required": false,
            "persistent": false,
            "title": "Contract Type",
            "remarks": "Contract Type which could be lease or warranty",
            "sameAsAttribute": "CONTRACTTYPE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STARTDATE",
            "required": false,
            "persistent": false,
            "title": "Start Date",
            "remarks": "Start date of the contract",
            "sameAsAttribute": "STARTDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ENDDATE",
            "required": false,
            "persistent": false,
            "title": "End Date",
            "remarks": "End date of the contract",
            "sameAsAttribute": "ENDDATE",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "STATUS",
            "required": false,
            "persistent": false,
            "title": "Status",
            "remarks": "Status of the contract",
            "sameAsAttribute": "STATUS",
            "sameAsObject": "CONTRACT"
        },
        {
            "attributeName": "ORGID",
            "required": false,
            "persistent": false,
            "title": "Organization",
            "remarks": "Organization identifier.",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "VENDOR",
            "required": false,
            "persistent": false,
            "title": "Vendor",
            "remarks": "Vendor of the contract",
            "sameAsAttribute": "COMPANY",
            "sameAsObject": "COMPANIES"
        },
        {
            "attributeName": "VENDORDESC",
            "required": false,
            "persistent": false,
            "title": "Description",
            "remarks": "Description of vendor",
            "sameAsAttribute": "NAME",
            "sameAsObject": "COMPANIES"
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "VIEWCONTINPUT",
            "source": "AMCREW",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "AREASAFFECTED",
            "remarks": "Relationship to the non-persistent ViewContInput.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "ASSET",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Asset application, displays all contracts that cover this asset and its parents.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "ASSETHIERARCHY",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "ASSETLOCCOMM",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "ASSETMOVEDFLT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "CI",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "COLLECTDETAILS",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "CONTRACTASSET",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "CREATERELINPUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVBALANCES",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVCOST",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVENTORY",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVLOT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVOICECOST",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVOICELINE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVRESERVE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "INVUSELINE",
            "remarks": "Relationship to the non-persistent ViewContInput.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "ISSUECURRENTITEM",
            "remarks": "Relationship to the non-persistent ViewContInput.",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "JOBITEM",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "JOBMATERIAL",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "JOBSERVICE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "JOBTOOL",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "JPASSETSPLINK",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LABOR",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LABTRANS",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCANCESTOR",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCATIONMETER",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCATIONS",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCATIONSPEC",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCAUTH",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCHIERARCHY",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCKOUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCLEADTIME",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "LOCOPER",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MATRECTRANS",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MATUSETRANS",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MEASUREMENT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MEASUREPOINT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MR",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MRLINE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "MULTIASSETLOCCI",
            "remarks": "Relationship to the non-persistent ViewContInput.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "NAMEDUSERS",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "PERSON",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Location application, displays all contracts that cover this location and its parents.",
            "whereClause": null,
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "PM",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "PMMETER",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "POLINE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "PRLINE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "PROBLEM",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "RFQLINE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "ROUTE_STOP",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SAFETYLEXICON",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SCHEDULELINE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SERVRECTRANS",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SLAASSETLOC",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SPAREPART",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SPLEXICONLINK",
            "remarks": "Relationship to the non-persistent ViewContInput.  ",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SPRELATEDASSET",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SPWORKASSET",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "SR",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "TAGLOCK",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "TAGOUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "TICKET",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "TOOLTRANS",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WARRANTYASSET",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause). The resulting set will contain zero objects. Note: This relationship is used only for the Asset application, displays all contracts that cover this asset and its parents.",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WHEREUSED",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WMASSIGNMENT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOACTIVITY",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOCHANGE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOCONTRACT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOGEN",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOHAZARD",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOLOCKOUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WORELEASE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WORKORDER",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOSAFETYLINK",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOTAGLOCK",
            "remarks": "Relationship to the non-persistent ViewContInput table. (No where clause).",
            "whereClause": "",
            "cardinality": null
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WOTAGOUT",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WPMATERIAL",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WPSERVICE",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        },
        {
            "name": "VIEWCONTINPUT",
            "source": "WPTOOL",
            "remarks": "Relationship to the non-persistent ViewContInput",
            "whereClause": null,
            "cardinality": "UNDEFINED"
        }
    ]
}