mos = {
    "objectName": "DPASWSUITE",
    "className": "psdi.app.dpldasset.TheOneMboSet",
    "description": "Deployed Assets Computers Suites",
    "longDescription": null,
    "isView": false,
    "isInternal": false,
    "isPersistent": true,
    "isMainObject": false,
    "uniqueId": "DPASWSUITEID",
    "primaryKeyColumns": [
        "DPASWSUITEID"
    ],
    "logicalRelationships": [
        {
            "objectName": "DPASWSUITE",
            "targetObject": "DPACSWSUITE",
            "parentKeys": "DPASWSUITEID",
            "targetKeys": "DPASWSUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software Suite",
            "longDescription": null
        }
    ],
    "targetLogicalRelationships": [
        {
            "objectName": "DEPLOYEDASSET",
            "targetObject": "DPASWSUITE",
            "parentKeys": "NODEID",
            "targetKeys": "NODEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Software Suite",
            "longDescription": null
        },
        {
            "objectName": "DPAMSWSUITE",
            "targetObject": "DPASWSUITE",
            "parentKeys": "SUITEID",
            "targetKeys": "SUITEID",
            "relNum": "1 to many",
            "status": "VERIFIED",
            "description": "Deployed Assets Software Suite Setup",
            "longDescription": null
        }
    ],
    "columns": [
        {
            "attributeName": "NODEID",
            "required": true,
            "persistent": true,
            "title": "Node Id",
            "remarks": "Node Id",
            "sameAsAttribute": "NODEID",
            "sameAsObject": "DEPLOYEDASSET"
        },
        {
            "attributeName": "SUITEID",
            "required": true,
            "persistent": true,
            "title": "Suite Id",
            "remarks": "Suite Id",
            "sameAsAttribute": "SUITEID",
            "sameAsObject": "DPAMSWSUITE"
        },
        {
            "attributeName": "SUITENAME",
            "required": false,
            "persistent": true,
            "title": "Suite",
            "remarks": "Name that identifies the software application suite. To identify software suites, Maximo uses a cron task to correlate the software application names collected by your asset discovery tool with software suites your administrator has defined in the Maximo Software Suite Setup application. If the cron task for software suite setup finds a software application included in a software suite setup record, it associates the application with the suite specified in the record.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LANGUAGE",
            "required": false,
            "persistent": true,
            "title": "Language",
            "remarks": "Language",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VERSION",
            "required": false,
            "persistent": true,
            "title": "Version",
            "remarks": "Version of the software suite. Maximo populates this field with the contents of the dpamswsuite.version field. Your administrator specifies a software suite version when defining a software suite in the Software Suite Setup application.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEDORG",
            "required": false,
            "persistent": true,
            "title": "Licensed Organization",
            "remarks": "Licensed Organization",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LICENSEDUSER",
            "required": false,
            "persistent": true,
            "title": "Licensed User",
            "remarks": "Licensed User",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "USAGECOUNT",
            "required": false,
            "persistent": true,
            "title": "Usage Count",
            "remarks": "Data in this field describes how frequently the software suite is used. Your administrator defines the values to display for usage frequency based on the usage counts your asset discovery tool provides for individual software applications. For software suites, the frequency for the component most often used (that is, the component with the highest usage count) determines the usage frequency for the entire suite. If your administrator does not define values for usage frequency in the Software Usage Setup application, Maximo displays the usage number collected by the asset discovery tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "LASTUSAGEDATE",
            "required": false,
            "persistent": true,
            "title": "Last Usage Date",
            "remarks": "Date on which a component of the software suite was last used.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "INSTALLDATE",
            "required": false,
            "persistent": true,
            "title": "Installation Date",
            "remarks": "Date the software suite was installed on the computer. If components are installed on different dates, the install date is the date the first component was installed.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "SERIALNUMBER",
            "required": false,
            "persistent": true,
            "title": "Serial Number",
            "remarks": "Serial Number",
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
            "attributeName": "MANUFACTURER",
            "required": true,
            "persistent": true,
            "title": "Manufacturer",
            "remarks": "Name of manufacturer of the software application suite.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DESCRIPTION",
            "required": false,
            "persistent": true,
            "title": "Description",
            "remarks": "Describes the software application suite. Software suites are identified based a correlation between the software names collected by the asset discovery tool and software names defined in the Maximo Software Suite Setup application. The suite description lists component applications of the software suite that are found during asset discovery.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CREATEDATE",
            "required": true,
            "persistent": true,
            "title": "Created Date",
            "remarks": "Create Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "CHANGEDATE",
            "required": true,
            "persistent": true,
            "title": "Changed Date",
            "remarks": "Change Date",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "VUSAGEDISPLAYTEXT",
            "required": false,
            "persistent": false,
            "title": "Usage",
            "remarks": "Data in this field describes how frequently the software suite is used. Your administrator defines the values to display for usage frequency based on the usage counts your asset discovery tool provides for individual software applications. For software suites, the frequency for the component most often used (that is, the component with the highest usage count) determines the usage frequency for the entire suite. If your administrator does not define values for usage frequency in the Software Usage Setup application, Maximo displays the usage number collected by the asset discovery tool.",
            "sameAsAttribute": null,
            "sameAsObject": null
        },
        {
            "attributeName": "DPASWSUITEID",
            "required": true,
            "persistent": true,
            "title": "Unique Identifier",
            "remarks": "Unique Identifier",
            "sameAsAttribute": null,
            "sameAsObject": null
        }
    ],
    "outgoingRelationships": [],
    "incomingRelationships": [
        {
            "name": "DDPASWSUITE",
            "source": "COMPUTERSYSTEM",
            "remarks": "delete children",
            "whereClause": "nodeid=:nodeid",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPAMREFMANUFACTURERK",
            "source": "DPAMMANUVARIANT",
            "remarks": "Find the SW suites that reference this manufacturer",
            "whereClause": "manufacturer=:manufacturervar",
            "cardinality": "UNDEFINED"
        },
        {
            "name": "DPASOFTWARE_DPASWSUITE",
            "source": "DPASOFTWARE",
            "remarks": null,
            "whereClause": "suiteid=:suiteid",
            "cardinality": "UNDEFINED"
        }
    ]
}