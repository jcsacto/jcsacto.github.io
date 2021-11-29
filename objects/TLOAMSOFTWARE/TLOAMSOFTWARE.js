mos = {
    "objectName": "TLOAMSOFTWARE",
    "className": "psdi.app.swcatalog.SoftwareCatalogSet",
    "description": "Software Product Table",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": true,
    "uniqueId": "TLOAMSOFTWAREID",
    "primaryKeyColumns": [
        "TLOAMSOFTWAREID"
    ],
    "logicalRelationships": [
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "DPACSOFTWARE",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMSOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMPRODUCTID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "DPASOFTWARE",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMSOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software Product",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "TLOAMDPAHWM",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "TLOAMSOFTWAREID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Software",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "TLOAMSWREL",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "CHILDSW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Child TLoam Software",
            "longDescription": null
        },
        {
            "objectName": "TLOAMSOFTWARE",
            "targetObject": "TLOAMSWREL",
            "parentKeys": "TLOAMSOFTWAREID",
            "targetKeys": "PARENTSW",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Parent TLoam Software",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "TLOAMSWCATALOG",
            "targetObject": "TLOAMSOFTWARE",
            "parentKeys": "TLOAMSWCATALOGID",
            "targetKeys": "CATALOGSOURCEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "TLoam Software Catalog",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "SWNAME",
            "required": false,
            "persistent": true,
            "title": "Software Name",
            "remarks": "Software name",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Description",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TYPE",
            "required": false,
            "persistent": true,
            "title": "Type",
            "remarks": "Type",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ROLE",
            "required": true,
            "persistent": true,
            "title": "Role",
            "remarks": "Role",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Version",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "RELEASE",
            "required": false,
            "persistent": true,
            "title": "Release",
            "remarks": "Release",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PARENT",
            "required": false,
            "persistent": true,
            "title": "Parent Record",
            "remarks": "Maps to the parent of this record in the hierarchy product/version/release. Null if this is a top level record",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "EXTERNALID",
            "required": false,
            "persistent": true,
            "title": "External ID",
            "remarks": "External ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CATALOGSOURCEID",
            "required": false,
            "persistent": true,
            "title": "Catalog Source",
            "remarks": "Catalog Source",
            "sameAsAttribute": "TLOAMSWCATALOGID",
            "sameAsObject": "TLOAMSWCATALOG"
        },
        {
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Manufacturer",
            "sameAsAttribute": "MANUFACTURERNAME",
            "sameAsObject": "DPAMMANUFACTURER"
        },
        {
            "attributeName": "PLATFORMBASE",
            "required": false,
            "persistent": true,
            "title": "Platform",
            "remarks": "Platform",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TARGETSOFTWAREID",
            "required": false,
            "persistent": true,
            "title": "Target Record",
            "remarks": "Maps to the actual catalog record. Null if this is already a target",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "UNIQUEID",
            "required": true,
            "persistent": true,
            "title": "Unique ID",
            "remarks": "Unique ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "PRODUCTID",
            "required": false,
            "persistent": true,
            "title": "Product Id",
            "remarks": "Product Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "FUNC",
            "required": false,
            "persistent": true,
            "title": "Function",
            "remarks": "Function",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "MANAGEDAS",
            "required": false,
            "persistent": true,
            "title": "Managed As",
            "remarks": "Specifies whether the software application needs to be managed in your enterprise. You can leave the field blank or click the Select Value icon to choose one of the available options.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "URL",
            "required": false,
            "persistent": true,
            "title": "URL",
            "remarks": "URL",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISIPLA",
            "required": true,
            "persistent": true,
            "title": "Is IPLA",
            "remarks": "Is this product licensed under an IPLA",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISPVU",
            "required": true,
            "persistent": true,
            "title": "Uses PVU",
            "remarks": "Is this product licensed using the Processor Value Units metric",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISSUBCAP",
            "required": true,
            "persistent": true,
            "title": "Subcapacity Eligible",
            "remarks": "Is this product eligible for subcapacity pricing",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISDELETED",
            "required": true,
            "persistent": true,
            "title": "Deleted",
            "remarks": "Is this entry deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DELETEDATE",
            "required": false,
            "persistent": true,
            "title": "Delete Date",
            "remarks": "Date when the record was deleted",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "ISREVIEWED",
            "required": true,
            "persistent": true,
            "title": "Reviewed",
            "remarks": "Indicates whether an administrator reviewed the record. The purpose of this attribute is to identify records created automatically, so an administrator can review them. By default, Maximo selects the check box when administrators create or change records using the Software Catalog application. By default, ITIC clears the check box when it creates records. To ensure that Maximo uses your naming conventions, after each ITIC import, filter newly imported records, which display an N in the Reviewed? column on the List tab. Review the new records and select this check box; if you edit the new records, Maximo automatically selects the check box.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "POINTS",
            "required": false,
            "persistent": true,
            "title": "Points",
            "remarks": "The amount of licensing points associated to this Software Product.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SSPID",
            "required": false,
            "persistent": true,
            "title": "S&S PID",
            "remarks": "Subscription and Support Product Identification Number",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SSEID",
            "required": false,
            "persistent": true,
            "title": "S&S EID",
            "remarks": "Subscription and Support Entitlement ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VULEXHIBITID",
            "required": false,
            "persistent": true,
            "title": "Value Unit Exhibit",
            "remarks": "Value Unit Exhibit",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "TLOAMSOFTWAREID",
            "required": true,
            "persistent": true,
            "title": "Unique Id",
            "remarks": "Unique Id",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CCID",
            "required": false,
            "persistent": true,
            "title": "CCID",
            "remarks": "Chargeable component",
            "sameAsAttribute": "CCID",
            "sameAsObject": "TAMITSWPRTNUM"
        },
        {
            "attributeName": "EID",
            "required": false,
            "persistent": true,
            "title": "EID",
            "remarks": "Entitlement ID",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [
        {
            "name": "TLOAMASSETLINEAGE",
            "target": "ASSET",
            "remarks": "The asset linked to a software catalog entry where instances of that software have been found. If this is a partition, the query returns also all partition parents and the computer where the partition has been found",
            "whereClause": "exists (select 1 from reconlink where exists (select 1 from tloamdpaancestor where exists (select 1 from tloamvdpasoftware where (tloamvdpasoftware.tloamproductid = :tloamsoftwareid or exists (select 1 from tloamsoftware where tloamsoftware.targetsoftwareid = :tloamsoftwareid and tloamsoftware.tloamsoftwareid = tloamvdpasoftware.tloamsoftwareid)) and tloamdpaancestor.nodeid=tloamvdpasoftware.nodeid) and tloamdpaancestor.ancestor=reconlink.nodeid) and reconlink.assetnum=asset.assetnum and reconlink.siteid=asset.siteid)",
            "cardinality": null
        },
        {
            "name": "TLOAMDPAMMANUVARIANT",
            "target": "DPAMMANUVARIANT",
            "remarks": "relationship of tloamsoftware to manufacturer variant",
            "whereClause": "manufacturervar=:manufacturer",
            "cardinality": null
        },
        {
            "name": "DPASOFTWARE",
            "target": "DPASOFTWARE",
            "remarks": "Deployed software inventory (TAMIT) for a catalog entry",
            "whereClause": "tloamsoftwareid=:tloamsoftwareid",
            "cardinality": null
        },
        {
            "name": "TAMITSWPRTNUM",
            "target": "TAMITSWPRTNUM",
            "remarks": "Relationship from Software Catalog to Software Part Number. Return zero or more rows.",
            "whereClause": "ccid=:ccid",
            "cardinality": null
        },
        {
            "name": "TLOAMDUPLALTKEY",
            "target": "TLOAMSOFTWARE",
            "remarks": "Find another object with the same alternate key",
            "whereClause": "tloamsoftwareid!=:tloamsoftwareid and uniqueid=:uniqueid",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRCHILDREL",
            "target": "TLOAMSOFTWARE",
            "remarks": "Returns the Release children for this Software Product. (Zero or more)",
            "whereClause": "parent=:tloamsoftwareid and type in (select value from synonymdomain where domainid = 'TLOAMSWTYPE' and maxvalue = 'RELEASE')",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRCHILDREN",
            "target": "TLOAMSOFTWARE",
            "remarks": "Returns the Product/Version/Release children for this Software Product. (Zero or more)",
            "whereClause": "parent=:tloamsoftwareid",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRCHILDVER",
            "target": "TLOAMSOFTWARE",
            "remarks": "Returns the Version children for this Software Product. (Zero or more)",
            "whereClause": "parent=:tloamsoftwareid and type in (select value from synonymdomain where domainid = 'TLOAMSWTYPE' and maxvalue = 'VERSION')",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRPARENT",
            "target": "TLOAMSOFTWARE",
            "remarks": "Relationship from Software Catalog to Software Catalog to get Parent in Product-Version-Release relationship. Returns zero or one row.",
            "whereClause": "tloamsoftwareid = :parent",
            "cardinality": null
        },
        {
            "name": "TLOAMSWVARIANT",
            "target": "TLOAMSOFTWARE",
            "remarks": "Software variants",
            "whereClause": "targetsoftwareid=:tloamsoftwareid",
            "cardinality": null
        },
        {
            "name": "TLOAMSWCATALOG",
            "target": "TLOAMSWCATALOG",
            "remarks": "Relationship of software to catalog",
            "whereClause": "tloamswcatalogid=:catalogsourceid",
            "cardinality": null
        },
        {
            "name": "TLOAMSWRELCHILD",
            "target": "TLOAMSWREL",
            "remarks": "Product Children Relationship (excludes deleted ones)",
            "whereClause": "childsw=:tloamsoftwareid and isdeleted=:no",
            "cardinality": null
        },
        {
            "name": "TLOAMSWRELPARENT",
            "target": "TLOAMSWREL",
            "remarks": "Product Parent Relationship (excludes deleted ones)",
            "whereClause": "parentsw=:tloamsoftwareid and isdeleted=:no",
            "cardinality": null
        }
    ],
    "incomingRelationships": [
        {
            "name": "TLOAMSOFTWARE",
            "source": "TAMITSWPRTNUM",
            "remarks": "Relationship from Software Part Number to Software Catalog. Return zero or one row.",
            "whereClause": "ccid=:ccid",
            "cardinality": null
        },
        {
            "name": "TLOAMDUPLALTKEY",
            "source": "TLOAMSOFTWARE",
            "remarks": "Find another object with the same alternate key",
            "whereClause": "tloamsoftwareid!=:tloamsoftwareid and uniqueid=:uniqueid",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRCHILDREL",
            "source": "TLOAMSOFTWARE",
            "remarks": "Returns the Release children for this Software Product. (Zero or more)",
            "whereClause": "parent=:tloamsoftwareid and type in (select value from synonymdomain where domainid = 'TLOAMSWTYPE' and maxvalue = 'RELEASE')",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRCHILDREN",
            "source": "TLOAMSOFTWARE",
            "remarks": "Returns the Product/Version/Release children for this Software Product. (Zero or more)",
            "whereClause": "parent=:tloamsoftwareid",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRCHILDVER",
            "source": "TLOAMSOFTWARE",
            "remarks": "Returns the Version children for this Software Product. (Zero or more)",
            "whereClause": "parent=:tloamsoftwareid and type in (select value from synonymdomain where domainid = 'TLOAMSWTYPE' and maxvalue = 'VERSION')",
            "cardinality": null
        },
        {
            "name": "TLOAMPVRPARENT",
            "source": "TLOAMSOFTWARE",
            "remarks": "Relationship from Software Catalog to Software Catalog to get Parent in Product-Version-Release relationship. Returns zero or one row.",
            "whereClause": "tloamsoftwareid = :parent",
            "cardinality": null
        },
        {
            "name": "TLOAMSWVARIANT",
            "source": "TLOAMSOFTWARE",
            "remarks": "Software variants",
            "whereClause": "targetsoftwareid=:tloamsoftwareid",
            "cardinality": null
        },
        {
            "name": "TLOAMRELSWPARENT",
            "source": "TLOAMSWREL",
            "remarks": "The parent in a SW Catalog relationship record",
            "whereClause": "tloamsoftwareid=:parentsw",
            "cardinality": null
        },
        {
            "name": "TLOAMSOFTWARE",
            "source": "TLOAMSWREL",
            "remarks": "Return the children Software Catalog Relationship entries.  (1 or more)",
            "whereClause": "tloamsoftwareid=:childsw",
            "cardinality": null
        }
    ]
}