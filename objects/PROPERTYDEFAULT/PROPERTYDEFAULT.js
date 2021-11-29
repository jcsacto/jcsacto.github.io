mos = {
    "objectName": "PROPERTYDEFAULT",
    "className": "psdi.app.contract.PropertyDefaultSet",
    "description": "Property Default Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "PROPERTYDEFAULTID",
    "primaryKeyColumns": [
        "ORGID",
        "CONTRACTTYPEID",
        "PROPERTYID"
    ],
    "logicalRelationships": [],
    "targetLogicalRelationships": [
        {
            "objectName": "CONTRACTTYPE",
            "targetObject": "PROPERTYDEFAULT",
            "parentKeys": "ORGID, CONTRACTTYPEID",
            "targetKeys": "ORGID, CONTRACTTYPEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Contract Type",
            "longDescription": null
        },
        {
            "objectName": "MAXOBJECT",
            "targetObject": "PROPERTYDEFAULT",
            "parentKeys": "OBJECTNAME",
            "targetKeys": "PROPERTYID",
            "relNum": null,
            "status": "INVALIDATED",
            "description": "Relationship 142",
            "longDescription": null
        },
        {
            "objectName": "ORGANIZATION",
            "targetObject": "PROPERTYDEFAULT",
            "parentKeys": "ORGID",
            "targetKeys": "ORGID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Organization for the record",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "PROPERTYID",
            "required": true,
            "persistent": true,
            "title": "Property ID",
            "remarks": "Unique property identifier",
            "sameAsAttribute": "OBJECTNAME",
            "sameAsObject": "MAXOBJECT"
        },
        {
            "attributeName": "DEFAULTVALUE",
            "required": false,
            "persistent": true,
            "title": "Default Value",
            "remarks": "Property ID default value",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EDITABLE",
            "required": true,
            "persistent": true,
            "title": "Editable",
            "remarks": "Could this property identifier be edited at the time of use?",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ORGID",
            "required": true,
            "persistent": true,
            "title": "Organization",
            "remarks": "Organization identifier",
            "sameAsAttribute": "ORGID",
            "sameAsObject": "ORGANIZATION"
        },
        {
            "attributeName": "CONTRACTTYPEID",
            "required": true,
            "persistent": true,
            "title": "Contract Type",
            "remarks": "Identifies the contract type",
            "sameAsAttribute": "CONTRACTTYPEID",
            "sameAsObject": "CONTRACTTYPE"
        },
        {
            "attributeName": "PROPERTYDEFAULTID",
            "required": true,
            "persistent": true,
            "title": "PROPERTYDEFAULTID",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "SFWPROPERTYDEFAULT",
            "source": "CONTRACT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the Contract. (propertydefault.contracttypeid=SFWCONTRACT,ENTERPRISE,OEM,RETAIL,SELECT,SUBSCRIPTION). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in('SFWCONTRACT','ENTERPRISE','OEM','RETAIL','SELECT','SUBSCRIPTION')) and propertyid in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in('SFWCONTRACT','ENTERPRISE','OEM','RETAIL','SELECT','SUBSCRIPTION')))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "CONTRACT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the Contract. (propertydefault.contracttypeid=contract.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHASEPROPERTYDEFAULT",
            "source": "CONTRACT",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the Contract. (propertydefault.contracttypeid=PURCHASE). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='PURCHASE') and propertyid not in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='SWLICENSE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "CONTRACTSWLIC",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the PurchView. (propertydefault.contracttypeid=SWLICENSE). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid='CONTRACTTYPE' and maxvalue ='SWLICENSE') and orgid=:orgid and propertyid not in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid='CONTRACTTYPE' and maxvalue='PURCHASE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "CONTRACTTYPE",
            "remarks": "Relationship to the PropertyDefault table, used to find property default records for a given organization and contract type. (propertydefault.orgid = contracttype.orgid and propertydefault.contracttypeid = contracttype.contracttypeid). The resulting set will contain more than one object.",
            "whereClause": "contracttypeid = :contracttypeid and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYINTERNAL",
            "source": "CONTRACTTYPE",
            "remarks": "Relationship to the PropertyDefault table, used to find property default records for a given organization and internal contract type. (propertydefault.orgid = contracttype.orgid and propertydefault.contracttypeid = contracttype.maxcontracttype). The resulting set will contain more than one object.",
            "whereClause": "contracttypeid = :maxcontracttype and orgid=:orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "LABORVIEW",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the LaborView. (propertydefault.contracttypeid=laborview.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "LEASEVIEW",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the LeaseView. (propertydefault.contracttypeid=leaseview.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the PurchView. (propertydefault.contracttypeid=purchview.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PURCHASEPROPERTYDEFAULT",
            "source": "PURCHVIEW",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the PurchView. (propertydefault.contracttypeid=PURCHASE). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='PURCHASE') and propertyid not in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue ='SWLICENSE'))",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "PROPERTYDEFAULT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the SfwView. (propertydefault.contracttypeid=sfwview.contracttype). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid = :contracttype and orgid = :orgid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "SFWPROPERTYDEFAULT",
            "source": "SFWVIEW",
            "remarks": "Relationship to the PropertyDefault table, used to find the PropertyDefault records whose propertyid match that of the SFWView. (propertydefault.contracttypeid=SFWCONTRACT,ENTERPRISE,OEM,RETAIL,SELECT,SUBSCRIPTION). The resulting set will contain zero or more objects.",
            "whereClause": "contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in('SFWCONTRACT','ENTERPRISE','OEM','RETAIL','SELECT','SUBSCRIPTION')) and propertyid in (select propertyid from propertydefault where contracttypeid in ( select value from synonymdomain where domainid = 'CONTRACTTYPE' and maxvalue in('SFWCONTRACT','ENTERPRISE','OEM','RETAIL','SELECT','SUBSCRIPTION')))",
            "cardinality": "UNDEFINED"
        }
    ]
}