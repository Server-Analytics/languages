/**
 * Ce fichier à été généré pour la dernière fois le 18/05/2022 à 23:53:08 par le script de génération de fichier langue.
 * Si celui-ci ne comporte pas les textes des dernières versions, pensez à le régénérer, ou demandez à qqn d'autre de le faire (sur le salon "traductions" du serveur Discord).
 *
 * @version 1.0.1 - Version du générateur
 * @language en-EN
 * @default fr-FR
 */

module.exports = {
    infos: {
        public: true,
        language_code: "en-EN",
        language_name: "English",
        language_flag: "🇬🇧",
        default: false
    },
    general: {
        months_list: {
            "1": [
                "january"
            ],
            "2": [
                "february"
            ],
            "3": [
                "march"
            ],
            "4": [
                "april"
            ],
            "5": [
                "may"
            ],
            "6": [
                "june"
            ],
            "7": [
                "july"
            ],
            "8": [
                "august"
            ],
            "9": [
                "september"
            ],
            "10": [
                "october"
            ],
            "11": [
                "november"
            ],
            "12": [
                "december"
            ]
        },
        time_formats: {
            "STANDARD SLASH + YEAR": "{DAY}/{MONTH}/{YEAR}",
            "STANDARD SLASH + YEAR HH:SS": "{DAY}/{MONTH}/{YEAR} at {HOUR}h{MINUTE}",
            "STANDARD FILE DATE": "{DAY}_{MONTH}_{YEAR}",
            "DD MONTH around HH": "{DAY} {MONTH} around {HOUR}h",
            "DD MONTH at HH": "{DAY} {MONTH} at {HOUR}h",
            "DD MONTH": "{DAY} {MONTH}"
        },
        time_names: {
            days: [
                " day",
                " days",
                "d"
            ],
            hours: [
                " hour",
                " hours",
                "h"
            ],
            minutes: [
                " minute",
                " minutes",
                " min"
            ],
            seconds: [
                " second",
                " seconds",
                "s"
            ],
            weeks: [
                " week",
                " weeks",
                " w"
            ],
            months: [
                " month",
                " month",
                "m"
            ],
            years: [
                " year",
                " years",
                "y"
            ]
        },
        errors: {
            bot_missing_permissions: "**Whoops!** I don't have sufficient permissions to run this command.\n> I need : {missingPermissions}",
            cmd_missing_permissions: "**Whoops!** You don't have the necessary permissions to run this command.\n> You're missing : {missingPermissions}",
            bot_unusable: "**Bot in maintenance !** {selfName} is not available at this time. *Please try again later*",
        },
        week_days_list: {
            "0": [
                "sunday",
                "sun"
            ],
            "1": [
                "monday",
                "mon"
            ],
            "2": [
                "tuesday",
                "tues"
            ],
            "3": [
                "wednesday",
                "wed"
            ],
            "4": [
                "thursday",
                "thu"
            ],
            "5": [
                "friday",
                "fri"
            ],
            "6": [
                "saturday",
                "sat"
            ]
        },
        common: {
            go_back: "Back",
            cancel: "Cancel",
            confirm: "Confirm",
            retry: "Try again",
            get_premium: "Become Premium"
        },
        timerange_modal: {
            title: "Choose a time interval",
            label: "Time interval (in days) :",
            error_title: "Whoops !",
            error_not_number: "You haven't entered a valid number ! *Example : `7`, `12`, `30`, etc.*",
            error_too_short: "The time interval is too short, *it must be at least `one week` !*",
            error_not_premium: "To access your statistics beyond `31` days, you must be **premium**. *Use the `/subscribe` command to learn more !*",
            error_button_retry: "Try again"
        }
    },
    help: {
        help_screen: {
            title: "Help page",
            description: "Thanks for using **{projectName}** v.**{version}** ! *You can check the latest patch notes, just by clicking [**here**]({lastPatchNoteLink}).*",
            fallback_message: "This category is empty :(",
            buttons: {
                website: "Website",
                support_server: "Support server",
                invite_bot: "Invite the bot"
            },
            categories: {
                STATS: "Statistics commands",
                SECONDARY_STATS: "Secondary commands",
                OTHER: "Other commands"
            },
            premium_expires_in: "*The server **premium** expires in {days} days.*"
        },
        commands: {
            graph: {
                short_description: "Generate a graph"
            },
            top: {
                short_description: "Show server rankings"
            },
            me: {
                short_description: "Show personal stats"
            },
            sync: {
                short_description: "Stats synchronization"
            },
            rawstats: {
                short_description: "Module and cache status"
            },
            botstats: {
                short_description: "Bot stats and infos"
            },
            lang: {
                short_description: "Change preferred language"
            },
            stats: {
                short_description: "Display your general statistics"
            },
            subscribe: {
                short_description: "Premium subscription"
            },
            counters: {
                short_description: "Manage server's counters"
            }
        }
    },
    graph: {
        errors: {
            fetch_error: "**Whoops!** The required data could not be retrieved to create a graph.. *If the problem happens again, please report the bug on the support server.*"
        },
        help_screen: {
            embed_title: "Create a graph",
            embed_description: "**Display** your stats or the server's stats with graphs. Start by selecting a **configuration** :",
            image_title: "Graphs",
            embed_field_server_graph: "Server graphs",
            embed_field_user_graph: "Graphs with your stats",
            components_guild_graph_select_menu: "Select a server stats graph..",
            components_user_graph_select_menu: "..or a graph with your stats!"
        },
        graph_main_screen: {
            advanced: {
                confirm_button: "Generate",
                advanced_button: "Advanced settings",
                advanced_embed_description: "**Adapt** and **customize** the display layout and dataset representation.",
                advanced_embed_options_field_title: "Available options:",
                advanced_options: {
                    display_bar_chart: "Bar display",
                    increment_stats: "Cumulative sum",
                    remove_inexistant_reports: "Removing of inexistants reports",
                    display_ticks: "Point display",
                    group_values: "Statistical grouping"
                },
                timerange_select_menu: {
                    placeholder: "Select a time range..",
                    option_title: "{timeRange} display",
                    premium_only_description: "Premium only"
                }
            },
            export: {
                export_button: "Export",
                export_done: "**Graph succesfully exported !** You can open the `.csv` file with your favourite spreadsheet software.",
                export_software_import_tip: "When importing, we advise you to follow the **recommended configuration** to avoid interpretation problems :",
                export_config: [
                    [
                        "Character sets",
                        "UTF-8 / Unicode (UTF-8)"
                    ],
                    [
                        "Column separator",
                        "Comma (,)"
                    ],
                    [
                        "Line separator",
                        "Line break (\\n)"
                    ]
                ]
            }
        },
        graph_types: {
            server_messages: {
                title: "Sent Messages",
                description: "Graph summarizing server activity in messages.",
                graph_name: "Summary of message activity"
            },
            server_voicetime: {
                title: "Time spent in voice",
                description: "Graph summarizing server voice activity.",
                graph_name: "Summary of voice activity"
            },
            server_members: {
                title: "Members",
                description: "Graph summarizing number of server members.",
                graph_name: "Summary of server members evolution"
            },
            server_deleted: {
                title: "Deleted Messages",
                description: "Graph summarizing amount of deleted messages.",
                graph_name: "Summary of deleted messages"
            },
            server_reactions: {
                title: "Reactions",
                description: "Graph summarizing reactions to messages.",
                graph_name: "Summary of reactions"
            },
            server_joined: {
                title: "New members",
                description: "Graph summarizing newcomers.",
                graph_name: "Summary of newcomers"
            },
            server_left: {
                title: "Members who left",
                description: "Graph summarizing members who left.",
                graph_name: "Summary of members who left"
            },
            user_myMessages: {
                title: "Sent Messages",
                description: "Graph summarizing your activity in messages.",
                graph_name: "Summary of activity by messages"
            },
            user_myVoicetime: {
                title: "Time spent in voice",
                description: "Graph summarizing your voice activity.",
                graph_name: "Summary of voice activity"
            },
            user_myReactedCount: {
                title: "Reactions",
                description: "Graph summarizing reactions to messages.",
                graph_name: "Summary of given reactions"
            },
            user_myDeletedMessages: {
                title: "Deleted Messages",
                description: "Graph summarizing your amount of deleted messages.",
                graph_name: "Summary of deleted messages"
            },
            server_boosts: {
                title: "Boosts",
                description: "Graph summarizing the amount of boosts.",
                graph_name: "Summary of the amount of boosts"
            }
        }
    },
    top: {
        not_enough_data: "**Whoops!** I don't have enough data to make rankings for now.. *If the problem happens again, please report the bug on the support server.*",
        not_allowed_timerange: "**Whoops!** You can't choose a timerange longer than **{max}** days.",
        not_allowed_timestamp_low: "**Whoops!** You can't select a time range inferior to **{max}** day(s).",
        top_canvas_leaderboard_date: "Global rankings on {date}",
        top_canvas_leaderboard_temp_date: "{type} rankings from {date1} to {date2}",
        top_canvas_empty_username: "Nobody",
        top_canvas_not_found_username: "User not found",
        top_canvas_leaderboard_temp_types: {
            "0": "completes",
            "5": "incompletes",
            "10": "schematics"
        },
        pos_abbreviations: {
            "1": "st",
            "2": "nd",
            "3": "rd",
            other: "th"
        },
        stat_units: {
            messages: [
                "Messages",
                "messages"
            ],
            voice: [
                "Hours in vocal chats",
                "hours in vocal chats"
            ]
        },
        ready_to_use_timeranges: {
            image_title: "Timeranges",
            embed_title: "Select a timerange",
            embed_description: "Select a timerange for the ranking.",
            embed_data_FULL: "All data",
            embed_data_PARTIAL_5: "Partial data",
            embed_data_PARTIAL_10: "Schematic data",
            embed_data_partial_disclamer: "To limit bot overload, some of the rankings are **incomplete** or **schematics**, their stats are inaccurate but sufficient enough to calculate rankings.",
            embed_data_learn_more: "Find out more",
            components_days_acronym: "d",
            error_premium_restricted: "**Whoops!** Calculating so much data takes a lot of resources. This is why temporary rankings are limited to the **last {max} days** for non-premium servers.."
        }
    },
    me: {
        errors: {
            cannot_fetch_user: "**Whoops!** Couldn't gather this user's data.. try again later !",
            data_flag_fetch_error: "**Whoops!** An error occured when gathering data for **DATA_FLAG** : `{flag}`."
        },
        card: {
            header_joined_at: "Joined on",
            header_created_at: "Created on",
            global_stats_messages: "Sent messages",
            global_stats_voice: "Hours in vocal chats",
            global_stats_leaderboard: "In rankings",
            buttons_edit: "Edit",
            units: {
                timeranges: [
                    "28d",
                    "7d",
                    "24h"
                ],
                messages: [
                    "message",
                    "messages"
                ],
                voice: [
                    "hour",
                    "hours"
                ],
                reactionsGiven: [
                    "reaction",
                    "reactions"
                ],
                deletedMessages: [
                    "message",
                    "messages"
                ]
            },
            elements: {
                messages: {
                    title: "Sent messages"
                },
                voice: {
                    title: "Time in vocal chats"
                },
                reactionsGiven: {
                    title: "Reactions"
                },
                involvement: {
                    title: "Engagement",
                    text: "Presence rate on the server/during the last month."
                },
                deletedMessages: {
                    title: "Deleted messages"
                },
                ranks: {
                    "messages-voice": {
                        title: "Activity Ranks",
                        names: {
                            X: "No data",
                            F: "Very inactive",
                            "F+": "Not very active",
                            "D-": "Not very active",
                            D: "Not very active",
                            "D+": "Not very active",
                            "C-": "Passively active",
                            C: "Passively active",
                            "C+": "Passively active",
                            "B-": "Rather active",
                            B: "Rather active",
                            "B+": "Active",
                            "A-": "Active",
                            A: "Very active",
                            "A+": "Extremely active"
                        }
                    },
                    meta: {
                        title: "Ranks",
                        description: "Evaluation rated from F to A+."
                    },
                    elements: {
                        "messages-voice": {
                            title: "Activity Ranks",
                            rank_titles: [
                                "Messages sent",
                                "Voice activity"
                            ],
                            names: {
                                X: "No data",
                                F: "Very inactive",
                                "F+": "Not very active",
                                "D-": "Not very active",
                                D: "Not very active",
                                "D+": "Not very active",
                                "C-": "Passively active",
                                C: "Passively active",
                                "C+": "Passively active",
                                "B-": "Rather active",
                                B: "Rather active",
                                "B+": "Active",
                                "A-": "Active",
                                A: "very active",
                                "A+": "Extremely active"
                            }
                        }
                    }
                },
                firstPlaceMessages: {
                    title: "Progression #1",
                    text: "Progression to become #1 of the/server in terms of messages."
                },
                nextPlaceMessages: {
                    title: "Ranking progression",
                    text: "Progression towards server/ranks #{x} in terms of messages."
                },
                graph: {
                    meta: {
                        title: "Graphic",
                        description: "Displays a graph."
                    },
                    elements: {
                        messages: {
                            title: "Sent messages",
                            description: "Graphic on your sent messages"
                        },
                        voice: {
                            title: "Vocal time",
                            description: "Graphic on your voice activity"
                        },
                        reactionsGiven: {
                            title: "Added reactions",
                            description: "Graphic on your added reactions"
                        },
                        deletedMessages: {
                            title: "Deleted messages",
                            description: "Graphic on your deleted messages"
                        }
                    }
                },
                percentage: {
                    meta: {
                        title: "Percentage",
                        description: "Displays a percentage + progress bar."
                    },
                    elements: {
                        involvement: {
                            title: "Engagement",
                            text: "Presence rate on the server /in the last month.",
                            description: "Presence in % on this server"
                        },
                        firstPlaceMessages: {
                            title: "Progression #1",
                            text: "Progression to become #1 of the/server in terms of messages.",
                            description: "Progression to become #1 of the server"
                        },
                        nextPlaceMessages: {
                            title: "Ranking progression",
                            text: "Progression towards server/ranks #{x} in terms of messages.",
                            description: "Ranking progression"
                        }
                    }
                },
                timeranges: {
                    meta: {
                        title: "Time statistics",
                        description: "Displays a data under 3 time ranges."
                    },
                    elements: {
                        messages: {
                            title: "Sent messages",
                            description: "Statistics on your sent messages."
                        },
                        voice: {
                            title: "Vocal time",
                            description: "Statistics on your voice activity."
                        },
                        reactionsGiven: {
                            title: "Added reactions",
                            description: "Statistics on your added reactions."
                        },
                        deletedMessages: {
                            title: "Deleted messages",
                            description: "Statistics on your deleted messages."
                        }
                    }
                },
                numeric: {
                    meta: {
                        title: "Numeric value",
                        description: "Displays a number with text."
                    },
                    elements: {
                        firstPlaceMessages: {
                            title: "Progression #1",
                            text: "Remaining messages before/reaching rank #1",
                            description: "Remaining messages before becoming server's #1"
                        },
                        nextPlaceMessages: {
                            title: "Ranking progression",
                            text: "Remaining messages before/reaching rank #{x]",
                            description: "Messages before the next ranking"
                        },
                        daysSinceAccJoin: {
                            title: "Days since arrival",
                            text: "Days since your/arrival on the server",
                            description: "Number of days since your arrival on this server"
                        },
                        daysSinceAccCreation: {
                            title: "Days since inception",
                            text: "Days since/your account was created",
                            description: "Number of days since your account was created"
                        }
                    }
                },
                correlogram: {
                    meta: {
                        title: "Correlogram",
                        description: "Displays a correlogram."
                    },
                    elements: {
                        messages: {
                            title: "Sent messages",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        voice: {
                            title: "Activité vocale",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        reactionsGiven: {
                            title: "Réactions données",
                            description: "Intensité de l'activité en fonction de la date"
                        },
                        deletedMessages: {
                            title: "Messages supprimés",
                            description: "Intensité de l'activité en fonction de la date"
                        }
                    }
                },
                firstPlaceMessages: {
                    title: "Progression #1",
                    text: "Progression pour devenir #1 du/serveur en terme de messages."
                },
                nextPlaceMessages: {
                    title: "Progression classement",
                    text: "Progression pour atteindre le/rang #{x} en messages."
                }
            },
            global_stats_voice_minutes: "Minutes en vocal"
        },
        edit: {
            errors: {
                SELECTED_LOCKED_CONTENT: "**This statistic is locked !** To use it, you must purchase it ! *In order to do that, here's what you must do :*\n\n{emoji} **Login on the website :**\n> Check out our [website]({link}), login, then when hovering your avatar, click on *'Shop'* and finally, in the left sidebar, click on 'Shop /me'.\n\n{emoji} **Purchase the statistic :**\n> When in the shop /me, select the element `{type}`, then, during the next step, purchase the statistic `{content}` !",
                SELECTED_LOCKED_CONTENT_IMAGE: "https://i.imgur.com/o4LyrQt.png"
            },
            agreement_message: "**Important : ** before you edit your card's arrangement, you must accept we save your preferences on *all your servers*. This data will **not be deleted** if you leave this server or delete your account and will be **public**, hence why this message's important./If you **accept** the data collection and storage, press **'Accept'** below.",
            agreement_confirm_button: "Accept",
            agreement_reject_button: "Refuse",
            agreement_reject_message: "**We won't save your preferences.**\n> if you have more questions about how we manage your **data**, you can join our **Discord server**. *Otherwise, if you change your mind, you can type the command again !*",
            agreement_reject_easteregg_gif: "https://tenor.com/view/dujardin-jean-daccord-comme-ca-gif-10162502",
            main_embed_description: "**Edit** the arrangement of the statistic elements on your card. *Select an element in the dropdown menu to edit it!*",
            buttons_save: "Save",
            main_embed_fields_name: "Line {n} :",
            main_embed_select_displayed: "Displayed :",
            main_embed_select_placeholder: "Select an element",
            select_type_embed_description: "**Alright!**Select what kind of element you want to display in this location **#{n}**.",
            select_type_embed_cancelled: "**Time-out!** The element's selection has been cancelled.",
            select_content_description: "**Alright!** Select what type of statistic you wish to display in the `{name}` box.",
            select_content_menu_locked_description: "Select to purchase this statistic.",
            elements: {
                graph: {
                    title: "Graph",
                    description: "Displays a graph."
                },
                percentage: {
                    title: "Percentage",
                    description: "Displays a percentage + progression bar."
                },
                ranks: {
                    title: "Ranks",
                    description: "Evaluation from F to A+."
                },
                timeranges: {
                    title: "Time statistics",
                    description: "Displays a value in 3 time ranges."
                }
            }
        },
        dummy: {
            box_displayed: "Affiché :",
            card_sub_title: "Carte factice"
        }
    },
    botstats: {
        stat_type_select_placeholder: "Select a statistic",
        graph_init_at: "Statistic manager started {x} hours ago",
        stat_types: {
            commandCount: "Ran commands",
            interactionCount: "Received interactions",
            messageCount: "Registered messages",
            cachedGuildCount: "Cached servers",
            cachedGuildMemberCount: "Cached members",
            cachedWebsiteUsersCount: "Cached users",
            ramUsage: "RAM Usage",
            databaseConnections: "Database queries",
            newGuilds: "Nouveaux serveurs",
            refreshedCounters: "Compteurs mis à jour"
        },
        at_this_moment: "Cette heure-ci : {x}"
    },
    _FILE_UPDATES_INFO: {
        last_update_timestamp: 1652910788635,
        last_update_date: "18/05/2022",
        last_update_filegenerator_version: "1.0.1"
    },
    stats: {
        errors: {
            fetch_error: "**Whoops!** Impossible de récupérer les données nécessaires pour afficher les statistiques.. *Si le problème persiste, veuillez signaler le bogue sur le serveur support.*"
        },
        help_screen: {
            embed_title: "Afficher une statistique",
            embed_description: "**Représentez** vos statistiques ou celles du serveur. Commencez par choisir une **préconfiguration** :",
            image_title: "Statistiques",
            embed_field_server_stats: "Statistiques du serveur",
            embed_field_user_stats: "Vos statistiques",
            components_guild_stat_select_menu: "📊 Statistiques du serveur",
            components_user_stat_select_menu: "👤 Vos statistiques"
        },
        timerange_modal: {
            title: "Choisir un intervalle de temps",
            label: "Intervalle temporel (en jours) :",
            error_title: "Whoops !",
            error_not_number: "Vous n'avez pas entré un nombre valide.. *Exemple : `7`, `12`, `30`, etc.*",
            error_too_short: "L'intervalle temporel entré est trop court, *il doit être d'au moins `une semaine` !*",
            error_not_premium: "Pour accéder à vos statistiques au delà de `31` jours, vous devez être *premium*.",
            button_retry: "Réessayer"
        },
        stat_view: {
            general: {
                text_x_days: "{days} jours",
                last_x_days: "Ces derniers {days} jours"
            },
            graph: {
                infoboxes: {
                    per_day: "/j",
                    today_title: "Ces dernières 24 heures",
                    evolution_title: "Evolution",
                    average_title: "En moyenne",
                    max_title: "Valeur maximum",
                    min_title: "Valeur minimum"
                }
            }
        },
        stats_types: {
            server_messages: {
                title: "Messages envoyés",
                description: "Messages envoyés sur ce serveur.",
                view_name: "Activité par messages"
            },
            server_voicetime: {
                title: "Temps passé en vocal",
                description: "Activité vocale du serveur.",
                view_name: "Activité vocale"
            },
            server_members: {
                title: "Membres",
                description: "Nombre de membres sur ce serveur.",
                view_name: "Évolution du nombre de membres"
            },
            server_deleted: {
                title: "Messages supprimés",
                description: "Messages supprimés sur ce serveur.",
                view_name: "Messages supprimés"
            },
            server_reactions: {
                title: "Réactions",
                description: "Réactions aux messages du serveur.",
                view_name: "Réactions aux messages"
            },
            server_joined: {
                title: "Nouveaux membres",
                description: "Nouveaux membres sur ce serveur.",
                view_name: "Nouveaux arrivants"
            },
            server_left: {
                title: "Départs",
                description: "Membres ayant quittés ce serveur.",
                view_name: "Nombre de départs"
            },
            server_boosts: {
                title: "Boosts",
                description: "Boosts du serveur.",
                view_name: "Boosts du serveur"
            },
            user_myMessages: {
                title: "Messages envoyés",
                description: "Vos messages envoyés sur ce serveur.",
                view_name: "Activté par messages"
            },
            user_myVoicetime: {
                title: "Temps en vocal",
                description: "Votre temps passé en vocal.",
                view_name: "Activité vocale"
            },
            user_myDeletedMessages: {
                title: "Messages supprimés",
                description: "Vos messages supprimés.",
                view_name: "Messages supprimés"
            }
        }
    },
    lang: {
        select_screen: {
            components_lang_select_placeholder: "Sélectionner une langue",
            components_lang_select_no_options_title: "Aucune langue disponible",
            components_lang_select_no_options_description: "Aidez-nous à traduire le bot !",
            custom_display_title: "Langues",
            embed_description: "**Bonjour, hello, holà..** Sélectionnez la langue d'affichage du bot.",
            embed_field_available_languages: "Langues disponibles :",
            embed_field_help_translate_title: "Aider à traduire :",
            embed_field_help_translate_content: "Propulsez le projet en le traduisant dans votre langue ; plus d'informations sur notre [serveur Discord]({link}). Merci !"
        },
        updated_lang_screen: {
            no_available_languages: "**Aucune traduction disponible !** Je n'ai pas encore été traduit.. Mais si tu souhaites remédier à ce problème, rejoins-nous ici : {link} !",
            embed_description: "**Bonjour !** Vos préférences linguistiques ont été mises à jour.",
            embed_description_details: "La langue choisie sera affichée sur tous vos serveurs, et pour vous seul."
        }
    },
    subscribe: {
        subscribe_ad: {
            embed_description: "**Devenez premium !** Et profitez de nombreux avantages tout en supportant un petit projet indépendant =)",
            buy_button: "Souscrire",
            redeem_button: "Utiliser un code",
            redeem_code: {
                modal_title: "Utiliser un code",
                modal_field_code: "Saisissez le code :",
                proc_invalid_code: "**Whoops !** Le code entré est invalide. *Si vous pensez qu'il s'agit d'une erreur, contactez-nous !*",
                proc_expired_code: "**Whoops !** Le code entré est expiré depuis le {date}..",
                proc_easter_egg: "**Bien essayé**, malheureusement : non",
                proc_parse_error: "**Erreur :** Une erreur est survenue lors de la lecture des données associés au code.",
                proc_success: "**Merci,** votre code a été appliqué avec succès ! *L'abonnement premium de ce serveur expirera le {date}.*"
            },
            canvas: {
                title: "Passez à la vitesse suppérieure !",
                support_message: "..et supportez le projet !",
                infoboxes: {
                    premium_title: "Abonnement actif !",
                    premium_content: "Ce serveur est actuellement premium jusqu'au {date} (dans {days} jours). Merci !",
                    deleted_stats_title: "Conservez vos stats",
                    deleted_stats_content: "Annulez la suppression des statistiuques après 31 jours. Ce serveur perd jusqu'à {x} relevés chaque mois !",
                    broader_timeranges_title: "Plages temporelles",
                    broader_timeranges_content: "Visualisez vos stats sur plusieurs mois et années, sans être contraint à 31 jours !",
                    more_counters_title: "Plus de compteurs",
                    more_counters_content: "Affichez plus de stats dans les salons de votre serveur en devenant premium !"
                }
            }
        }
    },
    counters: {
        main_view: {
            buttons_create_counter: "Créer un compteur",
            buttons_edit_counter: "Modifier",
            buttons_delete_counter: "Supprimer",
            embed_description: "**Les compteurs** affichent des statistiques dans les noms et topics de vos salons.",
            embed_description_more_details: "*Plus d'infos et de détails sur notre [`documentation`]({link}) !*",
            embed_counters_title: "Compteurs actifs :",
            embed_no_counters: "*Aucun compteur..* Créez-en un !",
            embed_custom_display_title: "Compteurs",
            max_counters_premium: "**Whoops!** Vous avez atteint la limite de compteurs. Un abonnement **premium** vous permet de repousser la limite jusqu'à **{x}** compteurs !",
            max_counters_reached: "**Whoops!** Vous avez atteint la limite maximale de compteurs sur ce serveur."
        },
        counter_selection_view: {
            selection_menu_placeholder: "Sélectionner un compteur",
            selection_menu_option_title: "Compteur #{n}",
            selection_list_title: "Liste des compteurs: ",
            selection_custom_display_titles: {
                edit: "Modifier un compteur",
                delete: "Supprimer un compteur"
            },
            selection_descriptions: {
                edit: "**Choisissez** le compteur que vous souhaitez modifier.",
                delete: "**Choisissez** le compteur que vous souhaitez supprimer."
            }
        },
        edit_counter_view: {
            embed_description: "**Choisissez** le contenu de votre compteur. Les statistiques marquées d'un {emoji} sont réservées aux serveurs premium.",
            embed_description_example: "[members] 👥    ⇄  182 👥\n[messages] msgs  ⇄  9 854 msgs",
            select_counter_title: "Choisir un compteur pré-fait",
            buttons_custom: "Personnalisé",
            buttons_premium: "Devenir premium",
            default_counters: {
                members: "Membres : [members] 👥",
                voice: "En vocal : [voice] 👥",
                date: "📅 [date]",
                messages: "Messages : [messages] 💬",
                online: "En ligne : [online] 🟢",
                guildAge: "Âge du serveur : [guildAge]",
                inactive: "Inactifs : [inactive] 👥",
                inactiveChunk: "[inactive]/[members] inactifs ([inactiveChunk]%)",
                active: "Membres actifs : [active] 👥",
                boosts: "Boosts : [boosts]",
                boostlvl: "[boosts] boosts • lvl [boostlvl]"
            },
            categories: {
                BASIC: "Essentiel",
                STATS: "Statistiques",
                MISC: "Divers"
            }
        },
        editor_modal: {
            modal_title_new: "Nouveau compteur",
            modal_title_edit: "Modifier un compteur",
            counter_name: "Contenu du compteur :",
            available_stats: "Statistiques disponibles :"
        },
        editor_proc: {
            embed_error_premium: "**Whoops !** Ce compteur contient des statistiques réservées aux serveurs premium. *Réessayez en remplaçant les tags suivants : {tags}*",
            embed_error_outdated: "**Whoops !** Ce compteur contient des statistiques erronées. *Réessayez en remplaçant les tags suivants : {tags}*",
            embed_error_no_tags: "**Whoops !** Ce compteur ne contient aucune statistique valide. *Réessayez en utilisant des tags comme `[members]`, `[messages]`, etc..*",
            buttons_retry: "Réessayer",
            buttons_get_premium: "Devenir premium",
            error_database: "**Une erreur est survenue** lors de l'enregistrement des données.. Nous voilà dans de beaux draps : le compteur créé sera malheureusement supprimé au prochain redémarrage. Merci d'entrer en contact avec le serveur support :/"
        },
        data_tags: {
            members: "Nombre de membres",
            messages: "Nombre de messages",
            voice: "Nombre de membres en vocal",
            date: "Date du jour (DD/MM/YYYY)",
            guildAge: "Âge du serveur",
            online: "Membres en ligne",
            inactive: "Inactifs (aucun message depuis 30j)",
            inactiveChunk: "Pourcentage d'inactifs",
            active: "Membres actifs (30j)",
            boosts: "Nombre de boosts",
            boostlvl: "Niveau de boost"
        }
    }
}
